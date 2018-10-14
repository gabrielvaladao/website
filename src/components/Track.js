import React from 'react';
import { withRouteData, Link } from 'react-static';

/*
  TODO: I want to use the releaseDate info
  to sort the tracks, but not display it.
  Pass it to parent.
*/

/*
TODO: PARSE IFRAMES (a11y)
- Give each li a unique key generated from track title (Music) - a11y
- Give each iframe a unique title generated from track title (Track) - console warning
- JSX-ify attribs, eg. frameBorder - console warning
*/

/* TODO: reconsider conditional for rendering optional elements (e.g. cta) */

export default ({ title, soundCloudEmbed, cta }) => (
  <article aria-labelledby="track-title">

    <h3 id="track-title">{title}</h3>

    {soundCloudEmbed}

    {cta && cta.text && cta.url
      && <Link className="cta" to={cta.url} aria-labelledby="track-title">{cta.text}</Link>
    }
  </article>
);
