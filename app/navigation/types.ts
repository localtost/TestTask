export type RootStackParamList = {
  User: undefined;
  Pills: undefined;
  Calendar: undefined;
};
export type HomeStackParamList = {
  Home: undefined;
};
export type SettingParamList = {
  Settings: undefined;
};
export type PillsStackParamList = {
  Pills: undefined;
  Info: {
    title?: string | undefined;
  };
};
export type CalendarStackParamList = {
  Calendar: undefined;
};
export type MainStackParamList = {
  DrawerStack: undefined;
};

export type DrawerStackParamList = {
  Home: RootStackParamList;
};
