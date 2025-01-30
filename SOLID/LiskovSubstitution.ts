// BEFORE

// abstract class BaseAdmin {
//   readonly name: string;
//   readonly role: string;

//   constructor(name: string, role: string) {
//     this.name = name;
//     this.role = role;
//   }

//   abstract getAdminName(): string;
//   abstract getAccess(): void;
// }

// class SuperAdmin extends BaseAdmin {
//   getAdminName(): string {
//     throw new Error('Method not implemented for this admin role.');
//   }

//   getAccess(): void {
//     console.log(`Full access for ${this.role}`);
//   }
// }

// class SupportAdmin extends BaseAdmin {
//   getAdminName(): string {
//     return this.name;
//   }

//   getAccess(): void {
//     const adminName = this.getAdminName();
//     console.log(`Access to chat and reviews with shown admin name: ${adminName} for ${this.role}`);
//   }
// }

// AFTER

abstract class BaseAdmin {
  readonly name: string;
  readonly role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }

  abstract getAccess(): void;
}

class SuperAdmin extends BaseAdmin {
  getAccess(): void {
    console.log(`Full access for ${this.role}`);
  }
}

class SupportAdmin extends BaseAdmin {
  getAdminName(): string {
    return this.name;
  }

  getAccess(): void {
    const adminName = this.getAdminName();
    console.log(`Access to chat and reviews with shown admin name: ${adminName} for ${this.role}`);
  }
}