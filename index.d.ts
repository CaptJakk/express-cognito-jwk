/// <reference types="express-jwt" />
import * as jwt from 'express-jwt';
export default function (poolId: string, property: string): jwt.RequestHandler;
