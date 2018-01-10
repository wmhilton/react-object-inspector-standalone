import { ObjectInspector } from 'react-inspector'
import retargetEvents from 'react-shadow-dom-retarget-events'
import ReactDOM from 'react-dom'
import React from 'react'

module.exports = (element, data) => {
  const shadowRoot = element.attachShadow({ mode: 'open' })
  const mountPoint = document.createElement('span')
  shadowRoot.appendChild(mountPoint)
  ReactDOM.render(<ObjectInspector data={data} />, mountPoint)
  retargetEvents(shadowRoot)
}
