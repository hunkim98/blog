import React, { useCallback, useEffect, useRef } from 'react'
import { Box } from '@mantine/core'
import * as d3 from 'd3'

interface SpiderChartProps {
  data: Array<{ label: string; ratio: number }>
  width: number
  height: number
  levels: number
  //   margin: { top: number; right: number; bottom: number; left: number }
}

const SpiderChart: React.FC<SpiderChartProps> = ({ data, width, height, levels }) => {
  const ref = useRef<HTMLDivElement>()
  const svgContainerRef = useRef<d3.Selection<SVGSVGElement, unknown, HTMLElement, any>>()
  const svgGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const circleGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const pentagonGridGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const renderGraph = useCallback(() => {
    if (!ref.current) {
      return
    }
    // const svg = d3.select(ref.current).append('svg').attr('width', width).attr('height', height)
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
      : (svgGRef.current = svgContainerRef.current.append('g'))

    const circleG = circleGRef.current ? circleGRef.current : (circleGRef.current = svg.append('g'))
    const pentagonGridG = pentagonGridGRef.current
      ? pentagonGridGRef.current
      : (pentagonGridGRef.current = svg.append('g'))
    // create circles
    const radialScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([0, width / 2])
    const ticks = Array.from({ length: levels }).map((_, i) => (i + 1) / levels)
    // create pentagons
    // circleG
    //   .selectAll('circle')
    //   .data(ticks)
    //   .join((enter) =>
    //     enter
    //       .append('circle')
    //       .attr('cx', width / 2)
    //       .attr('cy', height / 2)
    //       .attr('fill', 'none')
    //       .attr('stroke', 'rgba(255,255,255,0.5)')
    //       .attr('r', (d) => radialScale(d))
    //   )
    pentagonGridG
      .selectAll('polygon')
      .data(ticks)
      .join(
        (enter) => {
          const points = Array.from({ length: 5 }).map((_, i) => {
            const startAngle = -Math.PI / 2
            const angle = startAngle + (i * Math.PI * 2) / 5
            return [Math.cos(angle), Math.sin(angle)]
          })
          console.log(points)
          return enter
            .append('polygon')
            .attr('points', (d) =>
              points
                .map((p) => {
                  return p
                    .map((xys) => {
                      return radialScale(d) * xys
                    })
                    .join(',')
                })
                .join(' ')
            )
            .attr('transform', `translate(${width / 2},${height / 2})`)
            .attr('fill', 'none')
            .attr('stroke', 'rgba(255,255,255,0.5)')
        },
        (update) => update,
        (exit) => exit
      )
  }, [data, width, height, levels])

  useEffect(() => {
    renderGraph()
  }, [renderGraph])
  return (
    <Box
      ref={ref}
      w={width}
      h={height}
      style={
        {
          // zIndex: 50,
        }
      }
    ></Box>
  )
}

export default SpiderChart
