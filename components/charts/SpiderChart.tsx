import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { Box } from '@mantine/core'
import { exit } from 'process'
import * as d3 from 'd3'

interface SpiderChartProps {
  data: Array<{ label: string; ratio: number }>
  width: number
  height: number
  levels: number
  labelFontSize: number
  //   margin: { top: number; right: number; bottom: number; left: number }
}

const SpiderChart: React.FC<SpiderChartProps> = ({
  data,
  width,
  height,
  levels,
  labelFontSize,
}) => {
  const ref = useRef<HTMLDivElement>()
  const svgContainerRef = useRef<d3.Selection<SVGSVGElement, unknown, HTMLElement, any>>()
  const svgGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const axisGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const pentagonGridGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const pentagonGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const textLabelGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const scoreGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const nodesGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const renderGraph = useCallback(() => {
    if (!ref.current) {
      return
    }
    // const svg = d3.select(ref.current).append('svg').attr('width', width).attr('height', height)
    const maxWordLength = data.reduce(
      (acc, d) =>
        d.label.split(' ').some((word) => word.length > acc)
          ? Math.max(...d.label.split(' ').map((word) => word.length))
          : acc,
      0
    )
    const textPadding = maxWordLength * labelFontSize * 0.4
    if (svgContainerRef.current) {
      svgContainerRef.current
        .attr('width', width)
        .attr('height', height)
        .attr('style', 'z-index: 50')
    } else {
      svgContainerRef.current = d3
        .select(ref.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
    }

    const svg = svgGRef.current
      ? svgGRef.current
      : (svgGRef.current = svgContainerRef.current.append('g'))

    const pentagonGridG = pentagonGridGRef.current
      ? pentagonGridGRef.current
      : (pentagonGridGRef.current = svg.append('g'))

    const pentagonG = pentagonGRef.current
      ? pentagonGRef.current
      : (pentagonGRef.current = svg.append('g'))

    const textLabelG = textLabelGRef.current
      ? textLabelGRef.current
      : (textLabelGRef.current = svg.append('g'))

    const scoreG = scoreGRef.current ? scoreGRef.current : (scoreGRef.current = svg.append('g'))

    const nodesG = nodesGRef.current ? nodesGRef.current : (nodesGRef.current = svg.append('g'))

    const axisG = axisGRef.current ? axisGRef.current : (axisGRef.current = svg.append('g'))

    const radialScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([0, width / 2 - textPadding])

    const ticks = Array.from({ length: levels }).map((_, i) => (i + 1) / levels)

    const computeGridPoints = (d: number) => {
      return Array.from({ length: data.length })
        .map((_, i) => {
          const startAngle = -Math.PI / 2
          const angle = startAngle + (i * Math.PI * 2) / data.length
          return [Math.cos(angle), Math.sin(angle)]
        })
        .map((p) => {
          return p
            .map((xys) => {
              return radialScale(d) * xys
            })
            .join(',')
        })
        .join(' ')
    }
    pentagonGridG
      .selectAll('polygon')
      .data(ticks)
      .join(
        (enter) => {
          // since this is enter we must append the polygon
          return enter
            .append('polygon')
            .attr('points', (d) => computeGridPoints(d))
            .attr('transform', `translate(${width / 2},${height / 2})`)
            .attr('fill', 'none')
            .attr('stroke', 'rgba(255,255,255,0.3)')
        },
        (update) => {
          // we only need to update the locations of the points
          return update
            .attr('points', (d) => computeGridPoints(d))
            .attr('transform', `translate(${width / 2},${height / 2})`)
        },
        (exit) => {
          return exit.remove()
        }
      )

    axisG
      .selectAll('line')
      .data(ticks)
      .join(
        (enter) => {
          return enter
            .append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', (d, i) => {
              const startAngle = -Math.PI / 2
              const angle = startAngle + (i * Math.PI * 2) / data.length
              return Math.cos(angle) * radialScale(1)
            })
            .attr('y2', (d, i) => {
              const startAngle = -Math.PI / 2
              const angle = startAngle + (i * Math.PI * 2) / data.length
              return Math.sin(angle) * radialScale(1)
            })
            .attr('transform', `translate(${width / 2},${height / 2})`)
            .attr('stroke', 'rgba(255,255,255,0.3)')
        },
        (update) => {
          return update
            .attr('x2', (d, i) => {
              const startAngle = -Math.PI / 2
              const angle = startAngle + (i * Math.PI * 2) / data.length
              return Math.cos(angle) * radialScale(1)
            })
            .attr('y2', (d, i) => {
              const startAngle = -Math.PI / 2
              const angle = startAngle + (i * Math.PI * 2) / data.length
              return Math.sin(angle) * radialScale(1)
            })
            .attr('transform', `translate(${width / 2},${height / 2})`)
        }
      )

    const computeNodePoints = (d: { label: string; ratio: number }, i) => {
      const startAngle = -Math.PI / 2
      const angle = startAngle + (i * Math.PI * 2) / data.length
      const scaledRatio = radialScale(d.ratio)
      return [Math.cos(angle) * scaledRatio, Math.sin(angle) * scaledRatio]
    }

    const computePoints = (data: Array<{ label: string; ratio: number }>) => {
      return data
        .map((d, i) => computeNodePoints(d, i))
        .map((p) => p.join(','))
        .join(' ')
    }
    pentagonG
      .selectAll('polygon')
      .data(data)
      .join(
        (enter) =>
          enter
            .append('polygon')
            .attr('stroke', 'rgba(255,255,255,1)')
            .attr('stroke-width', 3)
            .attr('points', (d) => {
              // start from center
              return data.map((d, i) => `0,0`).join(' ')
            }) // Initial points
            .transition()
            .duration(500)
            .attr('points', (d) => computePoints(data)) // Initial points
            .attr('fill', 'rgba(255,255,255,0.2)')
            .attr('transform', `translate(${width / 2},${height / 2})`), // Initial position
        (update) =>
          update
            .attr('transform', `translate(${width / 2},${height / 2})`)
            .transition()
            .duration(1000)
            .attr('points', (d) => computePoints(data)), // Final points
        (exit) => exit.call((exit) => exit.transition().duration(500).style('opacity', 0)).remove()
      )

    nodesG
      .selectAll('circle')
      .data(data)
      .join(
        (enter) => {
          return (
            enter
              .append('circle')
              .attr('cx', (d, i) => 0)
              .attr('cy', (d, i) => 0)
              .attr('transform', `translate(${width / 2},${height / 2})`)
              .attr('fill', 'white')
              // .transition()
              // .duration(1000)
              // .attr('cx', (d, i) => computeNodePoints(d, i)[0])
              // .attr('cy', (d, i) => computeNodePoints(d, i)[1])
              .attr('r', 5)
          )
        },
        (update) => {
          return update
            .attr('transform', `translate(${width / 2},${height / 2})`)
            .transition()
            .duration(1000)
            .attr('cx', (d, i) => computeNodePoints(d, i)[0])
            .attr('cy', (d, i) => computeNodePoints(d, i)[1])
        },
        (exit) => {
          return exit.remove()
        }
      )

    const computeTextPosition = (d: { label: string; ratio: number }, i: number) => {
      const startAngle = -Math.PI / 2
      const angle = startAngle + (i * Math.PI * 2) / data.length
      const scaledRatio = radialScale(1.35)
      return [Math.cos(angle) * scaledRatio, Math.sin(angle) * scaledRatio]
    }

    function computeTextHtml(d: { label: string; ratio: number }) {
      const x = d3.select(this).attr('x')
      const y = d3.select(this).attr('dy')
      const t = d.label
        .split(' ')
        .map((word, i) => {
          return (
            `<tspan class="font-sans font-medium cursor-pointer" style="font-size:${labelFontSize}px;" x=` +
            x +
            ' dy=' +
            (+y + labelFontSize * 1.5 * i) +
            '>' +
            word +
            '</tspan>'
          )
        })
        .join('')
      return t
    }
    textLabelG
      .selectAll('text')
      .data(data)
      .join(
        (enter) => {
          return (
            enter
              // .html((d) => d.label)
              .append('text')
              .attr('class', 'cursor-pointer')
              .attr('style', 'cursor: pointer;')

              .attr('x', (d, i) => computeTextPosition(d, i)[0])
              .attr('y', (d, i) => computeTextPosition(d, i)[1])
              //   .text((d) => d.label.split(' ').join('\n'))
              .attr('fill', 'white')

              .attr('text-align', 'center')
              .attr('font-size', labelFontSize)
              .attr('text-anchor', (d, i) => {
                return 'middle'
              })
              .attr('transform', `translate(${width / 2},${height / 2})`)
              .attr('opacity', 0)
              .html(computeTextHtml)
              .transition()
              .duration(1000)
              .attr('opacity', 1)
          )
        },
        (update) => {
          return update
            .attr('transform', `translate(${width / 2},${height / 2})`)
            .attr('x', (d, i) => computeTextPosition(d, i)[0])
            .attr('y', (d, i) => computeTextPosition(d, i)[1])
            .attr('opacity', 0)
            .html(computeTextHtml)
            .transition()
            .duration(500)
            .attr('opacity', 1)
        },
        (exit) => {
          return exit.remove()
        }
      )

      // mouse hover on text
      .on('mouseover', function (event, d) {
        // change cursor
        d3.select(this).style('cursor', 'pointer')
        // d3.select(this).attr('fill', 'rgba(255,255,255,1)')
      })
      .on('click', function (event, d) {
        // console.log(event, d)
        // console.log(d)
      })
  }, [data, width, height, levels])

  const biggerSize = useMemo(() => Math.max(width, height), [width, height])

  useEffect(() => {
    renderGraph()
  }, [renderGraph])

  return (
    <Box
      ref={ref}
      w={width}
      h={height}
      pos={'relative'}
      className="z-50"
      style={
        {
          // zIndex: 50,
        }
      }
    >
      {width !== 0 && height !== 0 && (
        <Box
          pos="absolute"
          left={width / 2}
          top={height / 2}
          w={biggerSize}
          h={biggerSize}
          className="-z-10"
          style={{
            transform: 'translate(-50%, -50%)',
            transition: 'all 1s ease-in-out',
            backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`,
          }}
        ></Box>
      )}
    </Box>
  )
}

export default SpiderChart
