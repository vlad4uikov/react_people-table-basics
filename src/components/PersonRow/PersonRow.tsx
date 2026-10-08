import cn from 'classnames';
import { NavLink, useMatch } from 'react-router-dom';

import { Person } from '../../types';

type Props = {
  person: Person;
  mother: Person | undefined;
  father: Person | undefined;
};

export const PersonRow: React.FC<Props> = ({ person, mother, father }) => {
  const match = useMatch(`/people/${person.slug}`);

  return (
    <tr
      data-cy="person"
      key={person.slug}
      className={cn({
        'has-background-warning': match,
      })}
    >
      <td>
        <NavLink
          to={`/people/${person.slug}`}
          className={({ isActive }) =>
            cn({
              'has-text-danger': person.sex === 'f',
              // 'has-background-warning': isActive,
            })
          }
          // {cn({ 'has-text-danger': person.sex === 'f' })}
        >
          {person.name}
        </NavLink>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        {mother ? (
          <NavLink to={`/people/${mother.slug}`} className="has-text-danger">
            {mother.name}
          </NavLink>
        ) : (
          person.motherName || '-'
        )}
      </td>

      <td>
        {father ? (
          <NavLink to={`/people/${father.slug}`}>{father.name}</NavLink>
        ) : (
          person.fatherName || '-'
        )}
      </td>
    </tr>
  );
};
