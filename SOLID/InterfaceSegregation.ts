// BEFORE

// interface Admin {
//   createUser(): string;
//   blockUser(): string;
//   unblockUser(): string;
//   deleteUser(): string;
//   changeUserIdInfo(): string;
// }

// class SuperAdmin implements Admin {
//   createUser(): string {
//     // Create user and get status of the API request
//     return 'User is created';
//   }

//   blockUser(): string {
//     // Block user and get status of the API request
//     return 'User is blocked';
//   }

//   unblockUser(): string {
//     // Unblock user and get status of the API request
//     return 'User is unblocked';
//   }

//   deleteUser(): string {
//     // Delete user and get status of the API request
//     return 'User is deleted';
//   }

//   changeUserIdInfo(): string {
//     // Change user id info and get status of the API request
//     return 'User id info is changed';
//   }
// }

// class SupportAdmin implements Admin {
//   createUser(): string {
//     throw new Error('Method not implemented.');
//   }

//   blockUser(): string {
//     // Block user and get status of the API request
//     return 'User blocked';
//   }

//   unblockUser(): string {
//     throw new Error('Method not implemented.');
//   }

//   deleteUser(): string {
//     throw new Error('Method not implemented.');
//   }

//   changeUserIdInfo(): string {
//     throw new Error('Method not implemented.');
//   }
// }

// class ClientAdmin implements Admin {
//   createUser(): string {
//     // Create user and get status of the API request
//     return 'User is created';
//   }
  
//   blockUser(): string {
//     throw new Error('Method not implemented.');
//   }

//   unblockUser(): string {
//     // Unblock user and get status of the API request
//     return 'User is unblocked';
//   }

//   deleteUser(): string {
//     // Delete user and get status of the API request
//     return 'User is deleted';
//   }

//   changeUserIdInfo(): string {
//     // Change user id info and get status of the API request
//     return 'User id info is changed';
//   }
// }

// AFTER

interface SupportAdminInterface {
  blockUser(): string;
}

interface ClientAdminInterface {
  createUser(): string;
  unblockUser(): string;
  deleteUser(): string;
  changeUserIdInfo(): string;
}

class SuperAdmin implements SupportAdminInterface, ClientAdminInterface {
  createUser(): string {
    // Create user and get status of the API request
    return 'User is created';
  }

  blockUser(): string {
    // Block user and get status of the API request
    return 'User is blocked';
  }

  unblockUser(): string {
    // Unblock user and get status of the API request
    return 'User is unblocked';
  }

  deleteUser(): string {
    // Delete user and get status of the API request
    return 'User is deleted';
  }

  changeUserIdInfo(): string {
    // Change user id info and get status of the API request
    return 'User id info is changed';
  }
}

class SupportAdmin implements SupportAdminInterface {
  blockUser(): string {
    // Block user and get status of the API request
    return 'User blocked';
  }
}

class ClientAdmin implements ClientAdminInterface {
  createUser(): string {
    // Create user and get status of the API request
    return 'User is created';
  }

  unblockUser(): string {
    // Unblock user and get status of the API request
    return 'User is unblocked';
  }

  deleteUser(): string {
    // Delete user and get status of the API request
    return 'User is deleted';
  }

  changeUserIdInfo(): string {
    // Change user id info and get status of the API request
    return 'User id info is changed';
  }
}