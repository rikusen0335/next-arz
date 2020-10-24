export type News = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  title: string;
  thumbnail?: {
    url: string;
  };
  category?: string;
  content: string;
};

export type Team = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  thumbnail: {
    url: string;
  };
  name: string;
  slug: string;
};

export type Member = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  avatar: {
    url: string;
  };
  player_name: string;
  nick_name: string;
  team: Team;
  favorite_character?: string;
  work_lane?: string;
  favorite_game?: string;
  main_stream_game?: string;
  introduction?: string;
  description?: string;
  comment?: string;
  twitter_id?: string;
  twitch_id?: string;
  youtube_url?: string;
};

export type HistoryType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date;
  event: string;
  participation: string;
};
