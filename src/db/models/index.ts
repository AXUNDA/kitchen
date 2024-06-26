import { User } from "./user.model";
import { VendorItem } from "./item.model";

User.hasMany(VendorItem);
VendorItem.belongsTo(User, { foreignKey: "UserId" });

export { User, VendorItem };
