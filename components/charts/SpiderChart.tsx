import React, { useCallback, useEffect, useRef } from 'react'
import { Box } from '@mantine/core'
import { exit } from 'process'
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
  const pentagonGridGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
  const pentagonGRef = useRef<d3.Selection<SVGGElement, unknown, HTMLElement, any>>()
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

    const pentagonGridG = pentagonGridGRef.current
      ? pentagonGridGRef.current
      : (pentagonGridGRef.current = svg.append('g'))

    const pentagonG = pentagonGRef.current
      ? pentagonGRef.current
      : (pentagonGRef.current = svg.append('g'))
    // create circles
    const radialScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([0, width / 2])

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
            .attr('stroke', 'rgba(255,255,255,0.5)')
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

    const computePoints = (data: Array<{ label: string; ratio: number }>) => {
      return data
        .map((d, i) => {
          const startAngle = -Math.PI / 2
          const angle = startAngle + (i * Math.PI * 2) / data.length
          const scaledRatio = radialScale(d.ratio)
          return [Math.cos(angle) * scaledRatio, Math.sin(angle) * scaledRatio]
        })
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
            .attr('points', (d) => computePoints(data)) // Initial points
            .attr('fill', 'rgba(255,255,255,0.3)')
            .attr('transform', `translate(${width / 2},${height / 2})`) // Initial position
            .call(
              (enter) =>
                enter
                  .transition()
                  .duration(1000) // Transition duration
                  .attr('points', (d) => computePoints(data)) // Final points
            ),
        (update) =>
          update
            .call(
              (update) =>
                update
                  .transition()
                  .duration(1000) // Transition duration
                  .attr('points', (d) => computePoints(data)) // Final points
            )
            .attr('transform', `translate(${width / 2},${height / 2})`),
        (exit) => exit.call((exit) => exit.transition().duration(500).style('opacity', 0)).remove()
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
