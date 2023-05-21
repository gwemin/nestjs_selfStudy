import { Controller, Get } from '@nestjs/common';

// @Controller 데코레이터는 host 옵션을 사용하여 들어오는 요청의 HTTP 호스트가 특정 값과 일치해야지 처리하는 옵션을 추가할 수 있습니다.

@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
