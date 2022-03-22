import PropTypes from 'prop-types';
import { SectionStyle, Title } from "./SectionStyle.styled";

export function Section({title, children}) {
	return <SectionStyle>

		<Title>{title}</Title>

		{children}

	</SectionStyle>
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};