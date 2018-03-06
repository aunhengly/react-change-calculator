import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: null,
      amountReceived: null,
      amountOwed: null,

      twenties: null,
      tens: null,
      fives: null,
      ones: null,
      quarters: null,
      dimes: null,
      nickels: null,
      pennies: null
    };
    this.calculate = this.calculate.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  calculate(event) {
    event.preventDefault();
    var amountDue = parseFloat(this.state.amountDue);
    var amountReceived = parseFloat(this.state.amountReceived);
    var amountOwed = amountReceived - amountDue;
    Math.round(amountOwed, 2);

    var resultChange = amountOwed * 100.0;

    var twenties = parseInt(resultChange / 2000);
    resultChange %= 2000;

    var tens = parseInt(resultChange / 1000);
    resultChange %= 1000;

    var fives = parseInt(resultChange / 500);
    resultChange %= 500;

    var ones = parseInt(resultChange / 100);
    resultChange %= 100;

    var quarters = parseInt(resultChange / 25);
    resultChange %= 25;

    var dimes = parseInt(resultChange / 10);
    resultChange %= 10;

    var nickels = parseInt(resultChange / 5);
    resultChange %= 5;

    var pennies = Math.round(resultChange);
    this.setState({
      amountOwed,
      twenties,
      tens,
      fives,
      ones,
      quarters,
      dimes,
      nickels,
      pennies
    })
  }

  render() {
    return (
      <div className="container">
        <h2 style={{ color: 'white' }}>Change Calculator</h2>
        <hr style={{ borderTopColor: 'white' }} />
        
        <div className="row">
          <form className="card col-md-4" onSubmit={this.calculate}>
            <div className="card-header">
              <h6>Enter Information</h6>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label> How much is due? </label>
                <input type="number" className="form-control" name="amountDue" step="0.01" defaultValue={this.state.amountDue} onChange={this.handleOnChange} />
              </div>
              <div className="form-group">
                <label> How much was received?</label>
                <input type="number" className="form-control" name="amountReceived" step="0.01" defaultValue={this.state.amountReceived} onChange={this.handleOnChange} />
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary btn-sm btn-block" name="btnCal" type="submit">Calculate</button>
            </div>
          </form>

          <div className="col-md-8 alert alert-light mx-auto">
            <div className="row">
              <div className={`col alert alert-${this.state.amountOwed > 0 ? 'success' : 'danger'}`}>
                <h6>The total change due is ${
                  this.state.amountOwed != undefined ? // this could equal to !!this.state.amountOwed
                    this.state.amountOwed.toFixed(2) :
                    '--'
                }</h6>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 alert alert-secondary text-center py-1">
                <div className="well">
                  <h6>Twenties</h6>
                  <p className="lead">{this.state.twenties}</p>
                </div>
              </div>
              <div className="col-md-3 alert alert-secondary text-center py-1">
                <div className="well">
                  <h6>Tens</h6>
                  <p className="lead">{this.state.tens}</p>
                </div>
              </div>
              <div className="col-md-3 alert alert-secondary text-center py-1">
                <div className="well">
                  <h6>Five</h6>
                  <p className="lead">{this.state.fives}</p>
                </div>
              </div>
              <div className="col-md-3 alert alert-secondary text-center py-1">
                <div className="well">
                  <h6>One</h6>
                  <p className="lead">{this.state.ones}</p>
                </div>
              </div>
              <div className="col-md-3 alert alert-secondary text-center py-1">
                <div className="well">
                  <h6>Quarters</h6>
                  <p className="lead">{this.state.quarters}</p>
                </div>
              </div>
              <div className="col-md-3 alert alert-secondary text-center py-1">
                <div className="well">
                  <h6>Dimes</h6>
                  <p className="lead">{this.state.dimes}</p>
                </div>
              </div>
              <div className="col-md-3 alert alert-secondary text-center py-1">
                <div className="well">
                  <h6>Nickels</h6>
                  <p className="lead">{this.state.nickels}</p>
                </div>
              </div>
              <div className="col-md-3 alert alert-secondary text-center py-1">
                <div className="well">
                  <h6>Pennies</h6>
                  <p className="lead">{this.state.pennies}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
