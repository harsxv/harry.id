import React, { useState, useEffect } from 'react';
import { useTheme, Link } from '@geist-ui/core';
import NextLink from 'next/link';
import Image from 'next/image';
import ProfileLinks from './profile-links';
import { Configs } from '../utils';

const Profile: React.FC<unknown> = React.memo(() => {
  const theme = useTheme();
  const [showText, setShowText] = useState(theme.type === 'dark');
  useEffect(() => {
    const show = theme.type === 'dark';
    if (showText !== show) {
      setShowText(show);
    }
  }, [theme.type]);

  return (
    <div className="profile">
      <div className="user">
        <NextLink href="/" passHref>
          <Link>
            <div className="user-content">
              <div className="avatar">
                <Image
                  src="/assets/avatar.webp"
                  alt="avatar"
                  width={50} // Adjust the width as needed
                  height={50} // Adjust the height as needed
                  className="avatar-image"
                />
              </div>
              <div className="user-info">
                <div className="author">{Configs.author}</div>
                <div className="summary">{Configs.summary}</div>
              </div>
            </div>
          </Link>
        </NextLink>
      </div>
      <ProfileLinks />
      <style jsx>{`
        .profile {
          padding: ${theme.layout.gap} 0;
        }

        .user {
          display: flex;
          align-items: center;
        }

        .user-content {
          display: flex;
          align-items: center;
        }

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .user-info {
          margin-left: ${theme.layout.gapHalf};
        }

        .author {
          font-weight: bold;
          font-size: 1.2em;
        }

        .summary {
          color: ${theme.palette.accents_6};
          font-size: 0.9em;
        }

        .profile :global(.user) {
          padding-left: 0;
          margin-bottom: ${theme.layout.gapQuarter};
          max-width: 100%;
          overflow: hidden;
        }

        @media only screen and (max-width: ${theme.layout.breakpointMobile}) {
          .profile {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 5rem;
          }
        }
      `}</style>
    </div>
  );
});

export default Profile;
