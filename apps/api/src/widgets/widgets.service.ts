import { Widget } from '@fem/api-interfaces';
import { Injectable } from '@nestjs/common';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';

@Injectable()
export class WidgetsService {
  widgets: Widget[] = [
    {
      "id": "1",
      "title": "Remote mock widget 1 FTW",
      "description" : "Pending..."
  },
  {
      "id": "2",
      "title": "Remote mock widget 2 FTW",
      "description" : "Pending..."
  },
  {
      "id": "3",
      "title": "Remote mock widget 3 FTW",
      "description" : "Completed..."
  },
  {
      "id": "4",
      "title": "Remote mock widget 4 FTW",
      "description" : "Pending..."
  }
  ];

  create(createWidgetDto: CreateWidgetDto) {
    return 'This action adds a new widget';
  }

  findAll() {
    return this.widgets;
  }

  findOne(id: number) {
    return `This action returns a #${id} widget`;
  }

  update(id: number, updateWidgetDto: UpdateWidgetDto) {
    return `This action updates a #${id} widget`;
  }

  remove(id: number) {
    return `This action removes a #${id} widget`;
  }
}
