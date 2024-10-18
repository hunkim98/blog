import { parseISO, format, parse, isValid } from 'date-fns'
import { enGB } from 'date-fns/locale'
import React from 'react'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  const parsedDate = parse(dateString, 'P', new Date(), { locale: enGB })
  const isValidDate = isValid(parsedDate)
  if (!isValidDate) return <div>{dateString}</div>
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

export default DateFormatter
