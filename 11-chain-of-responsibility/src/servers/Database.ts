import PermissionType from "./PermissionType";

interface DataBaseItem {
  email: string;
  password: string;
  permission: PermissionType;
}

const DataBase: DataBaseItem[] = [
  {
    email: "carlos@teste.com",
    password: "123456",
    permission: PermissionType.ADMIN,
  },
  {
    email: "miguel@teste.com",
    password: "12346",
    permission: PermissionType.USER,
  },
];

export default DataBase;
