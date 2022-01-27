(async () => {
    const database = require("./src/database/index");
    const User = require("./src/app/model/user");

    try {
        const resultado = await database.sync();

        const mail = "teste1@gmail.com";
        const user = await User.findOne({ where: { mail: mail } });

        // const users = await User.findAll();
        console.log(user.id);
    } catch (error) {
        console.log(error);
    }
})();
