import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken';

const auth = async (req: Request, res: Response, next: NextFunction) => {

    const authToken = req.headers.authorization;

    if (!authToken) return res.status(401).json({ message: 'Você precisa fazer login!' });
    const token = authToken.substring(7)
    
    try {
        const { sub } = verify(token, process.env.JWT_SECRET)
        req.user_id = sub as string;

        return next();

    } catch (err) {
        return res.status(401).end();
    }
}

export default auth;