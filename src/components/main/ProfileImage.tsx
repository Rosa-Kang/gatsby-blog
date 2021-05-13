import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';

const PROFILE_IMAGE_LINK =
  'https://raw.githubusercontent.com/Rosa-Kang/gatsby-portfolio/main/src/images/ups-shot.jpg';

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`;

const ProfileImage: FunctionComponent= function() {
   return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage;