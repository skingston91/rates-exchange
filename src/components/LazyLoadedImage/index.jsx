import React from "react";

export default class LazyLoadImage extends React.Component {
  state = { loaded: false };
  componentDidMount() {
    this.image = new Image();
    this.image.src = this.props.src;
    this.image.onload = () => {
      this.setState({ loaded: true });
    };
  }
  render() {
    const { fallback, alt, ...props } = this.props;
    return this.state.loading ? fallback : <img {...props} alt={alt} />;
  }
}
