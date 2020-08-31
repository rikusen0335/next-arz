import { Member, Team } from "~/types/type";

const noAvatar = "/images/arz_logo.png"; // Why I can't use this shit?
const noImage = "/images/arz_gray_no_image.png";

export const getMemberAvatar = (member: Member): string => {
  if ("avatar" in member) {
    return member.avatar.url;
  } else {
    return noAvatar;
  }
};

export const getTeamThumbnail = (team: Team): string => {
  if ("thumbnail" in team) {
    return team.thumbnail.url;
  } else {
    return noImage;
  }
};
