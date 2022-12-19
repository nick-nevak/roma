import { useEffect, useState } from 'react';
import { Film } from '../../types/types';
import FilmCard from '../film-card/film-card';
import ShowMore from '../show-more/show-more';

type Props = {
  films: Film[];
  activeId: string | null;
  pageSize?: number;
};
export function FilmsListLazy({ films: allFilms, activeId, pageSize }: Props): JSX.Element {
  const size = pageSize ?? allFilms.length;

  const [canShowMore, setCanShowMore] = useState(true);
  const [visibleFilms, setVisibleFilms] = useState<Film[]>([]);

  useEffect(() => {
    if (allFilms.length) { showMore(); }
  }, [allFilms]);

  const showMore = () => {
    let newEndIndex = visibleFilms.length + size;
    if (newEndIndex > allFilms.length) {
      newEndIndex = allFilms.length;
      setCanShowMore(false);
    }
    setVisibleFilms(allFilms.slice(0, newEndIndex));
  }

  return <>{visibleFilms.map((film) =>
    <FilmCard
      key={film.id}
      film={film}
      isActive={film.id === +(activeId ?? '')}
    />)}
    {canShowMore && <ShowMore onClick={showMore} />}
  </>
}
