var ClockBox = React.createClass({
  render: function () {
    return {
      <div id="clockdiv">
        <div><span class="minutes"></span><div class="smalltext">minutes</div></div>
        <div><span class="seconds"></span><div class="smalltext">seconds</div></div>
      </div>
    }
  }
});

ReactDOM.render(
  <ClockBox />,
  document.getElementById('content')
);
