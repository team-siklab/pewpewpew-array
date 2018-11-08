import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

import './TestForm.css'

export class TestForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      testid: uuid(),
      targeturl: '',
      rate: 10,
      duration: 60,
      // :: regions
      'us-east-1': false,
      'us-east-2': false,
      'us-west-1': false,
      'us-west-2': false,
      'ap-south-1': false,
      'ap-northeast-1': false,
      'ap-northeast-2': false,
      'ap-southeast-1': false,
      'ap-southeast-2': false,
      'ca-central-1': false,
      'cn-north-1': false,
      'cn-northwest-1': false,
      'eu-central-1': false,
      'eu-west-1': false,
      'eu-west-2': false,
      'eu-west-3': false,
      'sa-east-1': false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.commitCreateTest = this.commitCreateTest.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  commitCreateTest () {
    console.log(this.state)
  }

  render () {
    return (
      <form className="TestForm">
        <h2>
          Create a Test
          <span className="testid">{this.state.testid}</span>
        </h2>

        <label className="inputcard">
          <span>Target URL</span>
          <input
            name="targeturl"
            type="url"
            placeholder="Input a URL to bombard with lazerzzzzz"
            value={this.state.targeturl}
            onChange={this.handleInputChange} />
        </label>

        <label className="inputcard">
          <span>Rate of fire</span>
          <input
            name="rate"
            type="number"
            placeholder=""
            value={this.state.rate}
            onChange={this.handleInputChange} />
        </label>

        <label className="inputcard">
          <span>Duration</span>
          <input
            name="duration"
            type="number"
            placeholder=""
            value={this.state.duration}
            onChange={this.handleInputChange} />
        </label>

        <label className="inputcard">
          <span>Regions</span>
          <ul>
            <li>
              <input
                name="us-east-1"
                type="checkbox"
                checked={this.state['us-east-1']}
                onChange={this.handleInputChange} />
                US East (N. Virginia)
            </li>
            <li>
              <input
                name="us-east-2"
                type="checkbox"
                checked={this.state['us-east-2']}
                onChange={this.handleInputChange} />
                US East (Ohio)
            </li>
            <li>
              <input
                name="us-west-1"
                type="checkbox"
                checked={this.state['us-west-1']}
                onChange={this.handleInputChange} />
                US West (N. California)
            </li>
            <li>
              <input
                name="us-west-2"
                type="checkbox"
                checked={this.state['us-west-2']}
                onChange={this.handleInputChange} />
                US West (Oregon)
            </li>
            <li>
              <input
                name="ap-south-1"
                type="checkbox"
                checked={this.state['ap-south-1']}
                onChange={this.handleInputChange} />
                Asia Pacific (Mumbai)
            </li>
            <li>
              <input
                name="ap-northeast-1"
                type="checkbox"
                checked={this.state['ap-northeast-1']}
                onChange={this.handleInputChange} />
                Asia Pacific (Tokyo)
            </li>
            <li>
              <input
                name="ap-northeast-2"
                type="checkbox"
                checked={this.state['ap-northeast-2']}
                onChange={this.handleInputChange} />
                Asia Pacific (Seoul)
            </li>
            <li>
              <input
                name="ap-northeast-3"
                type="checkbox"
                checked={this.state['ap-northeast-3']}
                onChange={this.handleInputChange} />
                Asia Pacific (Osaka)
            </li>
            <li>
              <input
                name="ap-southeast-1"
                type="checkbox"
                checked={this.state['ap-southeast-1']}
                onChange={this.handleInputChange} />
                Asia Pacific (Singapore)
            </li>
            <li>
              <input
                name="ap-southeast-2"
                type="checkbox"
                checked={this.state['ap-southeast-2']}
                onChange={this.handleInputChange} />
                Asia Pacific (Sydney)
            </li>
            <li>
              <input
                name="ca-central-1"
                type="checkbox"
                checked={this.state['ca-central-1']}
                onChange={this.handleInputChange} />
                Canada (Central)
            </li>
            <li>
              <input
                name="cn-north-1"
                type="checkbox"
                checked={this.state['cn-north-1']}
                onChange={this.handleInputChange} />
                China (Beijing)
            </li>
            <li>
              <input
                name="cn-northwest-1"
                type="checkbox"
                checked={this.state['cn-northwest-1']}
                onChange={this.handleInputChange} />
                China (Ningxia)
            </li>
            <li>
              <input
                name="eu-central-1"
                type="checkbox"
                checked={this.state['eu-central-1']}
                onChange={this.handleInputChange} />
                EU (Frankfurt)
            </li>
            <li>
              <input
                name="eu-west-1"
                type="checkbox"
                checked={this.state['eu-west-1']}
                onChange={this.handleInputChange} />
                EU (Ireland)
            </li>
            <li>
              <input
                name="eu-west-2"
                type="checkbox"
                checked={this.state['eu-west-2']}
                onChange={this.handleInputChange} />
                EU (London)
            </li>
            <li>
              <input
                name="eu-west-3"
                type="checkbox"
                checked={this.state['eu-west-3']}
                onChange={this.handleInputChange} />
                EU (Paris)
            </li>
            <li>
              <input
                name="sa-east-1"
                type="checkbox"
                checked={this.state['sa-east-1']}
                onChange={this.handleInputChange} />
                S. America (Sao Paulo)
            </li>
          </ul>
        </label>

        <label className="inputcard">
          <button
            type="button"
            onClick={this.commitCreateTest}>
            Lundagin mo Beybeh!
          </button>
        </label>
      </form>
    )
  }
}
