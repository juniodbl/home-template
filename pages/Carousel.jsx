export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slide: [{ display: 'block' }, { display: 'none' }, { display: 'none' }],
            slideCurrent: 0
        }

        this.changeCarousel = this.changeCarousel.bind(this);
    }

    changeCarousel() {
        let objRet = {
            slide: this.state.slide.map((it, index) => {
                return { display: (index == this.state.slideCurrent ? 'block' : 'none') };
            })
        };

        objRet.slideCurrent = this.state.slideCurrent + 1;

        if (objRet.slideCurrent > 2) {
            objRet.slideCurrent = 0;
        }

        this.setState(objRet)

        setTimeout(this.changeCarousel, 3000);
    }

    componentDidMount() {
        this.changeCarousel();
    }

    render() {
        return (
            <React.Fragment>
                <div className="mySlides w3-display-container w3-center" style={this.state.slide[0]}>
                    <img src="/static/la.jpg" style={{ width: '100%' }} />
                    <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                        <h3>Los Angeles</h3>
                        <p><b>We had the best time playing at Venice Beach!</b></p>
                    </div>
                </div>
                <div className="mySlides w3-display-container w3-center" style={this.state.slide[1]}>
                    <img src="/static/ny.jpg" style={{ width: '100%' }} />
                    <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                        <h3>New York</h3>
                        <p><b>The atmosphere in New York is lorem ipsum.</b></p>
                    </div>
                </div>
                <div className="mySlides w3-display-container w3-center" style={this.state.slide[2]}>
                    <img src="/static/chicago.jpg" style={{ width: '100%' }} />
                    <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                        <h3>Chicago</h3>
                        <p><b>Thank you, Chicago - A night we won't forget.</b></p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}