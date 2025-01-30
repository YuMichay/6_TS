// BEFORE

// interface UserInfoInterface {
//   fullName: string;
//   email: string;
//   number: string;
//   role: string;
// }

// class User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   number: string;
//   role: string;

//   constructor(firstName: string, lastName: string, email: string, number: string, role: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.number = number;
//     this.role = role;
//   }

//   getUser(): UserInfoInterface {    
//     return {
//       fullName: this.getFullName(),
//       email: this.email,
//       number: this.number,
//       role: this.role
//     }
//   }

//   private getFullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   setUser(): void {
//     console.log("set user: ", this.getUser());
//   }
// }

// AFTER

interface UserInfoInterface {
  fullName: string;
  email: string;
  number: string;
  role: string;
}

class User {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  role: string;

  constructor(firstName: string, lastName: string, email: string, number: string, role: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.number = number;
    this.role = role;
  }

  getUser(): UserInfoInterface {    
    return {
      fullName: this.getFullName(),
      email: this.email,
      number: this.number,
      role: this.role
    }
  }

  private getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}


interface UserRepositoryInterface {
  save(userInfo: UserInfoInterface): void;
}

class UserRepository implements UserRepositoryInterface {
  save(userInfo: UserInfoInterface): void {
    console.log("user was saved: ", userInfo);
  }
}