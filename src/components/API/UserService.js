export default class UserService {
  static login(setIsAuth) {
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  static logout(setIsAuth) {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  static getUserInfo() {
    let user = {
      id: 1,
      name: 'Ім\'я',
      lastName: 'Прізвище',
      email: 'test@gmail.com',
    };

    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      user = JSON.parse(localStorage.getItem('user'));
    }

    return user;
  }

  static changeInfo(name, lastName, email) {
    const user = this.getUserInfo();

    user.name = name;
    user.lastName = lastName;
    user.email = email;

    localStorage.setItem('user', JSON.stringify(user));
  }
}
