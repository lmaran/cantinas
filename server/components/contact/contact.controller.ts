import { Request, Response } from "express";

const contactController = {

    getContactPage: async (req: Request, res: Response) => {
        res.send("Contact page for Cantinas");
    },

};

export default contactController;