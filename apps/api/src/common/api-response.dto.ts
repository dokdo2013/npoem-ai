import { Type } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export interface CommonResponse<T> {
  status: number;
  message: string;
  data: T;
}

export class Response200<T> implements CommonResponse<T> {
  @ApiProperty({ example: 200 })
  status: number;

  @ApiProperty({ example: '데이터 로딩에 성공했습니다.' })
  message: string;

  @ApiProperty()
  data: T;
}

export class Response201<T> implements CommonResponse<T> {
  @ApiProperty({ example: 201 })
  status: number;

  @ApiProperty({ example: '데이터가 성공적으로 생성되었습니다.' })
  message: string;

  @ApiProperty()
  data: T;
}

interface ApiOptions {
  statusCode: number;
  isArray: boolean;
  nullable: boolean;
}

export function ApiResponseType<T>(
  classRef: Type<T>,
  options?: Partial<ApiOptions>,
): Type<CommonResponse<T>> {
  abstract class ApiResponseTypeClass implements CommonResponse<T> {
    @ApiProperty({ type: Number, default: options?.statusCode ?? 200 })
    status: number;

    @ApiProperty({ type: String, default: '데이터 로딩에 성공했습니다.' })
    message: string;

    @ApiProperty({
      type: classRef,
      isArray: options?.isArray ?? false,
      nullable: options?.nullable ?? false,
    })
    data: T;
  }

  Object.defineProperty(ApiResponseTypeClass, 'name', {
    value: `${classRef.name}${options?.isArray ? 'Array' : ''}Type`,
    writable: false,
  });

  return ApiResponseTypeClass as Type<ApiResponseTypeClass>;
}
