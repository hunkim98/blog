import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Box } from '@mantine/core'
import React from 'react'
import * as d3 from 'd3'

interface BarChartProps {
  data: Array<{ label: string; value: number }>
  width: number
  height: number
  labelFontSize: number
  selectedLabel: string | null
  setSelectedLabel: React.Dispatch<React.SetStateAction<string | null>>
  margin: {
    top: number
    right: number
    bottom: number
    left: number
  }
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  width,
  height,
  labelFontSize,
  selectedLabel,
  setSelectedLabel,
  margin,
}) => {
  const [hoveringDataIdx, setHoveringDataIdx] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>()
  const svgContainerRef = useRef<d3.Selection<SVGSVGElement, unknown, HTMLElement, any>>()
  const svgGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  //   const axisGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const xAxisGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const yAxisGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const xRef = useRef<d3.ScaleBand<string>>()
  const yRef = useRef<d3.ScaleLinear<number, number>>()
  const xLabelsGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const barsGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const svgDefsRef = useRef<d3.Selection<SVGDefsElement, unknown, HTMLElement, any>>()
  const numbersGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const behindBarsGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()

  const renderGraph = useCallback(() => {
    if (!ref.current) return

    const svgWidth = width
    const svgHeight = height - margin.top - margin.bottom
    if (svgContainerRef.current) {
      svgContainerRef.current.attr('width', width).attr('height', height)
    } else {
      svgContainerRef.current = d3
        .select(ref.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
    }
    const svg = svgGRef.current
      ? svgGRef.current
      : (svgGRef.current = svgContainerRef.current.append('g')).attr(
          'transform',
          `translate(0,${margin.top})`
        )
    const svgDefs = svgDefsRef.current
      ? svgDefsRef.current
      : (svgDefsRef.current = svg.append('defs'))
    const xAxisG = xAxisGRef.current ? xAxisGRef.current : (xAxisGRef.current = svg.append('g'))
    const yAxisG = yAxisGRef.current ? yAxisGRef.current : (yAxisGRef.current = svg.append('g'))
    const xLabelsG = xLabelsGRef.current
      ? xLabelsGRef.current
      : (xLabelsGRef.current = svg.append('g'))

    const barsG = barsGRef.current ? barsGRef.current : (barsGRef.current = svg.append('g'))
    const numbersG = numbersGRef.current
      ? numbersGRef.current
      : (numbersGRef.current = svg.append('g'))
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, svgWidth])
      .padding(0.1)

    xRef.current = x

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) * 1.05])
      .nice()
      .range([svgHeight, 0])
    yRef.current = y

    const xAxis = d3.axisBottom(x)
    const yAxis = d3.axisLeft(y)

    xAxisG
      .attr('transform', `translate(0,${svgHeight})`)
      .call(xAxis)
      .selectAll('text')
      .call((t) => {
        // remove thext
        t.text('')
      })
      .attr('opacity', 1)

    function computeTextHtml(d: { label: string; value: number }) {
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
    xLabelsG
      .selectAll('text')
      .data(data)
      .join(
        (enter) => {
          return enter
            .append('text')
            .attr('x', (d) => x(d.label) + x.bandwidth() / 2)
            .attr('y', svgHeight + 20)
            .attr('text-anchor', 'middle')
            .attr('class', (d, i) => `font-tiempos cursor-pointer node-${i}`)
            .attr('font-size', labelFontSize)
            .attr('fill', 'rgba(255,255,255,1)')
            .html(computeTextHtml)
            .attr('opacity', 0)
            .transition()
            .duration(1000)
            .attr('opacity', 1)
        },
        (update) => {
          return update
            .attr('x', (d) => x(d.label) + x.bandwidth() / 2)
            .attr('y', svgHeight + 20)
            .attr('font-size', labelFontSize)
            .attr('class', (d, i) => `font-tiempos cursor-pointer node-${i}`)
            .attr('fill', 'rgba(255,255,255,1)')
            .html(computeTextHtml)
            .transition()
            .duration(1000)

            .attr('opacity', 1)
        },
        (exit) => {
          return exit.remove()
        }
      )

    const gradientColors = ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0)']
    const gradient = svgDefs
      .selectAll('linearGradient')
      .data(gradientColors)
      .join((enter) => {
        return enter.append('linearGradient')
      })
      .attr('id', 'gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%')

    gradient
      .selectAll('stop')
      .data(gradientColors)
      .join((enter) => {
        return enter
          .append('stop')
          .style('stop-color', (d) => d)
          .attr('offset', (d, i) => {
            return 100 * (i / (gradientColors.length - 1)) + '%'
          })
      })

    // behind bars is for hover effect

    barsG
      .selectAll('rect')
      .data(data)
      .join(
        (enter) => {
          return (
            enter
              .append('rect')
              // we will fill with gradient
              .attr('fill', 'url(#gradient)')
              .attr('stroke', 'rgba(255,255,255,1)')
              .attr('stroke-width', 1.5)
              .attr('class', (d, i) => `cursor-pointer node-${i}`)
              .attr('x', (d) => x(d.label))
              .attr('width', x.bandwidth())
              .attr('height', 0)
              .attr('y', svgHeight)
              .transition()
              .duration(1000)
              .attr('y', (d) => y(d.value))
              .attr('height', (d) => svgHeight - y(d.value))
          )
          // .attr('height', (d) => svgHeight - y(d.value))
        },
        (update) => {
          return (
            update
              .transition()
              .duration(1000)
              .attr('fill', 'url(#gradient)')
              //   .attr('fill', 'red')
              .attr('x', (d) => x(d.label))
              .attr('y', (d) => y(d.value))
              .attr('width', x.bandwidth())
              .attr('height', (d) => svgHeight - y(d.value))
          )
        },
        (exit) => {
          return exit.remove()
        }
      )

    // add nubmers to the bars
    numbersG
      .selectAll('text')
      .data(data)
      .join(
        (enter) => {
          return enter
            .append('text')
            .attr('x', (d) => x(d.label) + x.bandwidth() / 2)
            .attr('y', (d) => y(d.value) - 10)
            .attr('text-anchor', 'middle')
            .attr('class', 'font-tiempos')
            .attr('font-size', labelFontSize + 5)
            .attr('fill', 'rgba(255,255,255,1)')
            .text((d) => d.value)
            .attr('opacity', 0)
            .transition()
            .delay(1000)
            .duration(500)
            .attr('opacity', 1)
        },
        (update) => {
          return update
            .attr('x', (d) => x(d.label) + x.bandwidth() / 2)
            .attr('y', (d) => y(d.value) - 10)
            .attr('text-anchor', 'middle')
            .attr('class', 'font-tiempos')
            .attr('font-size', labelFontSize + 3)
            .attr('fill', 'rgba(255,255,255,1)')
            .text((d) => d.value)
            .transition()
            .delay(1000)
            .duration(100)
            .attr('opacity', 1)
        },
        (exit) => {
          return exit.remove()
        }
      )
    svgContainerRef.current
      .on('mouseover', function (event, d) {
        const targetClass = d3.select(event.target).attr('class')
        if (!targetClass) return
        if (targetClass.includes('node-')) {
          const nodeIdxStartpoint = targetClass.indexOf('node-')
          const nodeIdx = parseInt(targetClass.slice(nodeIdxStartpoint).split('-')[1])
          if (selectedLabel !== null) {
            return
          }
          setHoveringDataIdx(nodeIdx)
        } else {
          setHoveringDataIdx(null)
        }
      })
      .on('mouseout', function () {
        setHoveringDataIdx(null)
      })
      .on('click', function (event, d) {
        const targetClass = d3.select(event.target).attr('class')
        if (!targetClass) {
          setSelectedLabel(null)
          return
        }
        if (targetClass.includes('node-')) {
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
      })
  }, [
    data,
    height,
    labelFontSize,
    margin.bottom,
    margin.left,
    margin.right,
    margin.top,
    selectedLabel,
    setSelectedLabel,
    width,
  ])

  const renderHoveringGraph = useCallback(() => {
    const svg = svgGRef.current
      ? svgGRef.current
      : (svgGRef.current = svgContainerRef.current.append('g')).attr(
          'transform',
          `translate(0,${margin.top})`
        )
    const behindBarsG = behindBarsGRef.current
      ? behindBarsGRef.current
      : (behindBarsGRef.current = svg.append('g'))
    const y = yRef.current
    const x = xRef.current
    const svgHeight = height - margin.top - margin.bottom
    if (!x || !y) return
    behindBarsG
      .selectAll('rect')
      .data(data)
      .join(
        (enter) => {
          return enter
            .append('rect')
            .attr('class', (d, i) => `cursor-pointer node-${i}`)
            .attr('fill', 'rgba(255,255,255,0.3)')
            .attr('x', (d) => x(d.label))
            .attr('y', (d) => y(0))
            .attr('width', x.bandwidth())
            .attr('opacity', 0)
            .attr('height', 0)
            .transition()
            .duration(1000)
        },
        (update) => {
          return update
            .transition()
            .duration(1000)
            .attr('x', (d) => x(d.label))
            .attr('y', (d) => y(d.value))
            .attr('width', x.bandwidth())
            .attr('opacity', (d, i) => {
              if (selectedLabel !== null) {
                const selectedIdx = data.findIndex((item) => item.label === selectedLabel)
                return selectedIdx === i ? 1 : 0
              }
              return hoveringDataIdx === i ? 1 : 0
            })
            .attr('height', (d, i) => svgHeight - y(d.value))
        },
        (exit) => {
          return exit.remove()
        }
      )
  }, [data, width, height, hoveringDataIdx, selectedLabel])
  const biggerSize = useMemo(() => Math.max(width, height), [width, height])

  useEffect(() => {
    renderGraph()
  }, [renderGraph])

  useEffect(() => {
    renderHoveringGraph()
  }, [renderHoveringGraph])
  return (
    <Box ref={ref} w={width} h={height} pos={'relative'} className="z-50" style={{}}>
      {/* {width !== 0 && height !== 0 && (
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
      )} */}
    </Box>
  )
}

export default BarChart
