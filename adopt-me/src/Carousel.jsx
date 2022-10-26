import { Component } from 'react';

// you can EITHER have hooks OR class components, not both
// i.e. useBreedList cannot be used here
// some things functional components can't do, like lifecycle methods

class Carousel extends Component {
  state = {
    active: 0
  }
  // useEffect is now the generic form of the "lifecycle" methods

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
  }

  // arrow function provides the proper scope for this method i.e. Carousel
  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index, // + "coerces a string to a number"
      // dataset refers to all data on element
      // index will come out as a string without a "unary plus" +blah
    })
  }

  render () {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className='carousel-smaller'>
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img 
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    )
  }
};

export default Carousel;
