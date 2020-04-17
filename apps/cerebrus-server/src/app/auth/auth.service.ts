import { Injectable } from '@nestjs/common';
import { AuthModel } from '@pandoras-box/types';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService {

  constructor(@InjectModel('Auth') private readonly authModel: AuthModel) {}

}