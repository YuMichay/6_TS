// BEFORE

// abstract class BaseAdmin {
//   readonly name: string;
//   readonly role: string;

//   constructor(name: string, role: string) {
//     this.name = name;
//     this.role = role;
//   }
// }

// class SuperAdmin extends BaseAdmin {}

// class SupportAdmin extends BaseAdmin {
//   getAdminName(): string {
//     return this.name;
//   }
// }

// class AdminAccess {
//   private adminRole: string;

//   constructor(adminRole: string) {
//     this.adminRole = adminRole;
//   }

//   giveAccess(): void {
//     if (this.adminRole === "superAdmin") {
//       // Give full access
//     } else if (this.adminRole === "supportAdmin") {
//       // Get admin name
//       // Give access to chat and reviews with shown admin name
//     }
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