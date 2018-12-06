import React from 'react';
import { withRouteData, Link } from 'react-static';
import styled from 'styled-components';
//
import Track from '../components/Track';
import StyledLinkText from '../elements/StyledLinkText';
import H1 from '../elements/H1';

const Ul = styled.ul`
  padding-left: 0;
`;

const Li = styled.li`
  list-style-type: none;
  margin-top: ${({ theme }) => theme.space.one};
`;

/* Known bug with SoundCloud embeds: unique key prop error */

/**
 * TODO: Create iframe Component from track ID.
 * For user-friendliness, let client paste in a full embed code.
 * App should extract the track ID and apply brand color to play button.
 */

/**
 * TODO: iframe title attribs have been added by hand to satisfy eslint a11y error. generate these.
 */
const Music = ({ id, ...props }) => (
  <section id={id}>
    <H1>Music</H1>
    <p>
      Select downloads are available on{' '}
      <StyledLinkText>
        <Link to="https://www.beatport.com/artist/labrysinthe/640674/tracks">Beatport</Link>
      </StyledLinkText>
    </p>
    <Ul>
      <Li key="fire-loves-sugar-teaser">
        <Track
          title="Fire Loves Sugar (Teaser)"
          soundCloudEmbed={[
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/489549831&color=%236fdfdf&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              title="Fire Loves Sugar (Teaser)"
            />
          ]}
        />
      </Li>
      <Li key="shake-the-dust-teaser">
        <Track
          title="Shake the Dust (Teaser)"
          soundCloudEmbed={[
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/368663576&color=%236fdfdf&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              title="Shake the Dust (Teaser)"
            />
          ]}
        />
      </Li>
      <Li key="delicious-monster-ep-previews">
        <Track
          title="Delicious Monster EP - Previews"
          soundCloudEmbed={[
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/343832514&color=%236fdfdf&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              title="Delicious Monster EP - Previews"
            />
          ]}
          cta={{
            text: 'Download the full EP on Beatport',
            url: 'https://www.beatport.com/release/delicious-monster/2106224'
          }}
        />
      </Li>
      <Li key="far-and-away">
        <Track
          title="Far and Away"
          soundCloudEmbed={[
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/342470222&color=%236fdfdf&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              title="Far and Away"
            />
          ]}
        />
      </Li>
    </Ul>
  </section>
);

export default withRouteData(Music);
