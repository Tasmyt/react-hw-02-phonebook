import PropTypes from 'prop-types';
import { Tag, Location, Stats } from '../Profile/Profile.styled';
import { Statis, Title, Item } from './Statistics.styled';
export default function Statistics({ title, stats }) {
  return (
    <Statis>
      {title && <Title>{title}</Title>}

      <Stats>
        {stats.map(({id, label, percentage}) => (
          <Item key={id}>
            <Tag>{label}</Tag>
            <Location>{percentage}</Location>
          </Item>
        ))}
      </Stats>
    </Statis>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
