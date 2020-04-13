import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

const jwt = require('jsonwebtoken');

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        let token = req.header('x-auth-token');
        let decoded = jwt.verify(token, 'secret');
        console.log(decoded);
        next();
    }
}