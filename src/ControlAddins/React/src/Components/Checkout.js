class Checkout extends React.Component {
  constructor () {
    super ();
    this.state = {
      elementFontSize: window.innerWidth < 450 ? '14px' : '18px',
    };
    window.addEventListener ('resize', () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
        this.setState ({elementFontSize: '14px'});
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== '18px'
      ) {
        this.setState ({elementFontSize: '18px'});
      }
    });
  }

  render () {
    const {elementFontSize} = this.state;
    return (
      <div className="Checkout">
        <Elements>
          <CardForm fontSize={elementFontSize} />
        </Elements>
      </div>
    );
  }
}