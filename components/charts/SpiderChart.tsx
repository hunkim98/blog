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
  selectedLabel: string | null
  setSelectedLabel: React.Dispatch<React.SetStateAction<string | null>>
  //   margin: { top: number; right: number; bottom: number; left: number }
}

const SpiderChart: React.FC<SpiderChartProps> = ({
  data,
  width,
  height,
  levels,
  labelFontSize,
  selectedLabel,
  setSelectedLabel,
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
  const clickCircleGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const [hoveringDataIdx, setHoveringDataIdx] = React.useState<number | null>(null)
  const maxWordLength = useMemo(
    () =>
      data.reduce(
        (acc, d) =>
          d.label.split(' ').some((word) => word.length > acc)
            ? Math.max(...d.label.split(' ').map((word) => word.length))
            : acc,
        0
      ),
    [data]
  )
  const textPadding = useMemo(
    () => maxWordLength * labelFontSize * 0.4,
    [maxWordLength, labelFontSize]
  )
  const renderGraph = useCallback(() => {
    if (!ref.current) {
      return
    }
    // const svg = d3.select(ref.current).append('svg').attr('width', width).attr('height', height)

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

    const clickCircleG = clickCircleGRef.current
      ? clickCircleGRef.current
      : (clickCircleGRef.current = svg.append('g'))

    const axisG = axisGRef.current ? axisGRef.current : (axisGRef.current = svg.append('g'))

    const nodesG = nodesGRef.current ? nodesGRef.current : (nodesGRef.current = svg.append('g'))

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
            .attr('transform', `translate(${width / 2},${height / 2})`) // Initial position
            .attr('points', (d) => {
              // start from center
              return data.map((d, i) => `0,0`).join(' ')
            }) // Initial points
            .transition()
            .duration(1000)
            .attr('points', (d) => computePoints(data)) // Initial points
            .attr('fill', 'rgba(255,255,255,0.2)'),
        (update) =>
          update
            .attr('transform', `translate(${width / 2},${height / 2})`)
            .transition()
            .duration(1000)
            .attr('points', (d) => computePoints(data)), // Final points
        (exit) => exit.call((exit) => exit.transition().duration(500).style('opacity', 0)).remove()
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
      const dIdx = data.findIndex((dd) => dd.label === d.label)
      const t = d.label
        .split(' ')
        .map((word, i) => {
          return (
            `<tspan class="font-sans font-medium node-${dIdx}" style="font-size:${labelFontSize}px;" x=` +
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
      // .classed('cursor-pointer', true)
      .data(data)
      .join(
        (enter) => {
          return (
            enter
              // .html((d) => d.label)
              .append('text')
              .attr('class', (d, i) => `node-${i} cursor-pointer`)

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
          return (
            update
              .attr('transform', `translate(${width / 2},${height / 2})`)
              .attr('x', (d, i) => computeTextPosition(d, i)[0])
              .attr('y', (d, i) => computeTextPosition(d, i)[1])
              // .attr('opacity', 0)
              .html(computeTextHtml)
              .transition()
              .duration(500)
              .attr('opacity', 1)
          )
        },
        (exit) => {
          return exit.remove()
        }
      )

    clickCircleG
      .selectAll('circle')
      .data(data)
      .join(
        (enter) => {
          return enter
            .append('circle')
            .attr('class', (d, i) => `node-${i} cursor-pointer`)
            .attr('cx', (d, i) => computeTextPosition(d, i)[0])
            .attr('cy', (d, i) => computeTextPosition(d, i)[1])
            .attr('r', 20)
            .attr('fill', 'transparent')
            .attr('transform', `translate(${width / 2},${height / 2})`)
        },
        (update) => {
          return update
            .attr('transform', `translate(${width / 2},${height / 2})`)
            .attr('cx', (d, i) => computeTextPosition(d, i)[0])
            .attr('cy', (d, i) => computeTextPosition(d, i)[1])
        },
        (exit) => {
          return exit.remove()
        }
      )

    nodesG
      .selectAll('circle')
      .data(data)
      .join(
        (enter) => {
          return enter
            .append('circle')
            .attr('transform', `translate(${width / 2},${height / 2})`)
            .attr('class', (d, i) => `node-${i} cursor-pointer`)
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('fill', 'white')
            .attr('r', 5)
            .transition()
            .duration(1000)
            .attr('cx', (d, i) => {
              return computeNodePoints(d, i)[0]
            })
            .attr('cy', (d, i) => {
              return computeNodePoints(d, i)[1]
            })
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

    svgContainerRef.current
      .on('mouseover', function (event, d) {
        // console.log('svg mouseover')
        // check if there is a text element
        // if not, do nothing
        const targetClass = d3.select(event.target).attr('class')
        if (!targetClass) {
          return
        } else {
          if (targetClass.includes('node-')) {
            // const nodeIdx = parseInt(targetClass.split('-')[1])
            // find the index of node-
            const nodeIdxStartpoint = targetClass.indexOf('node-')
            const nodeIdx = parseInt(targetClass.slice(nodeIdxStartpoint).split('-')[1])

            setHoveringDataIdx(nodeIdx)
          } else {
            setHoveringDataIdx(null)
          }
        }
      })
      .on('mouseout', function (event, d) {
        setHoveringDataIdx(null)
      })
      .on('click', function (event, d) {
        const targetClass = d3.select(event.target).attr('class')
        if (!targetClass) {
          setSelectedLabel(null)
          return
        } else {
          if (targetClass.includes('node-')) {
            // const nodeIdx = parseInt(targetClass.split('-')[1])
            // find the index of node-
            const nodeIdxStartpoint = targetClass.indexOf('node-')
            const nodeIdx = parseInt(targetClass.slice(nodeIdxStartpoint).split('-')[1])

            setSelectedLabel((prev) => {
              if (prev === data[nodeIdx].label) {
                return null
              }
              return data[nodeIdx].label
            })
          } else {
            setSelectedLabel(null)
          }
        }
      })
  }, [data, width, height, levels, selectedLabel, setSelectedLabel])

  const biggerSize = useMemo(() => Math.max(width, height), [width, height])

  const computeTextNodePosition = useCallback(
    (i: number) => {
      if (i === null) {
        return [0, 0]
      }
      const startAngle = -Math.PI / 2
      const angle = startAngle + (i * Math.PI * 2) / data.length
      const d = data[i]
      const radialScale = d3
        .scaleLinear()
        .domain([0, 1])
        .range([0, width / 2 - textPadding])
      const scaledRatio = radialScale(d.ratio)
      return [Math.cos(angle) * scaledRatio, Math.sin(angle) * scaledRatio]
    },
    [data, textPadding, width]
  )

  const selectedLabelIdx = useMemo(() => {
    const index = data.findIndex((d) => d.label === selectedLabel)
    if (index === -1) {
      return null
    }
    return index
  }, [selectedLabel])

  useEffect(() => {
    renderGraph()
  }, [renderGraph])

  return (
    <Box
      ref={ref}
      w={width}
      h={height}
      pos={'relative'}
      className="z-40"
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
      {width !== 0 && height !== 0 && data.length > 0 && (
        <Box
          pos="absolute"
          left={
            selectedLabelIdx !== null
              ? computeTextNodePosition(selectedLabelIdx)[0] + width / 2
              : computeTextNodePosition(hoveringDataIdx)[0] + width / 2
          }
          top={
            selectedLabelIdx !== null
              ? computeTextNodePosition(selectedLabelIdx)[1] + height / 2
              : computeTextNodePosition(hoveringDataIdx)[1] + height / 2
          }
          // left={width / 2}
          // top={height / 2}
          w={biggerSize * 0.8}
          opacity={selectedLabelIdx !== null ? 1 : hoveringDataIdx !== null ? 0.5 : 0}
          h={biggerSize * 0.8}
          className="-z-10"
          style={{
            zIndex: -10,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.5s ease-in-out',
            backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 50%)`,
          }}
        ></Box>
      )}
    </Box>
  )
}

export default SpiderChart
