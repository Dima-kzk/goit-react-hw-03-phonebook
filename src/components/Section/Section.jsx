import { Component } from 'react';
import { SectionTitle } from './Section.styled';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </>
    );
  }
}

export default Section;
