// BEFORE

// class User {
//   name: string;

//   constructor(name: string,) {
//     this.name = name;
//   }
// }

// interface UserRepositoryInterface {
//   save(userInfo: User): void;
// }

// class UserRepository implements UserRepositoryInterface {
//   save(userInfo: User): void {
//     console.log("user was saved: ", userInfo);
//   }
// }

// class UserService {
//   userRepository: UserRepository;

//   constructor() {
//     this.userRepository = new UserRepository();
//   }

//   createUser(name: string) {
//     const user = new User(name);
//     this.userRepository.save(user);
//   }
// }

// AFTER

class User {
  name: string;

  constructor(name: string,) {
    this.name = name;
  }
}

interface UserRepositoryInterface {
  save(userInfo: User): void;
}

class UserRepository implements UserRepositoryInterface {
  save(userInfo: User): void {
    console.log("user was saved: ", userInfo);
  }
}

class UserService {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  createUser(name: string) {
    const user = new User(name);
    this.userRepository.save(user);
  }
}