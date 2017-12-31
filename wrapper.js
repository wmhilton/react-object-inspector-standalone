import { ObjectInspector } from 'react-inspector'
import ReactDOM from 'react-dom'
import React from 'react'

module.exports = (element, data) => {
  ReactDOM.render(<ObjectInspector data={data} />, element)
}
