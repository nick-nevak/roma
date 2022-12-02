export enum AppRoute {
  Film = '/film',
  AddReview = '/review',
  Player = '/player/:id',
  MyList = '/mylist',
  Login = '/login',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
