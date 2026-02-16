import { Injectable, signal, computed } from '@angular/core';
import { ListSection } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private initialData: ListSection[] = [
    {
      type: 'Стиль',
      items: [
        { id: 1, name: 'Кроль', value: 10, selected: false },
        { id: 2, name: 'Брасс', value: 20, selected: false },
        { id: 3, name: 'Баттерфляй', value: 30, selected: false },
        { id: 4, name: 'На спине', value: 40, selected: false },
      ],
    },
    {
      type: 'Дистанция',
      items: [
        { id: 5, name: '50 м', value: 100, selected: false },
        { id: 6, name: '100 м', value: 200, selected: false },
        { id: 7, name: '400 м', value: 300, selected: false },
      ],
    },
  ];

  sections = signal<ListSection[]>(this.initialData);
  selectedTypeName = signal<string>('Стиль');

  activeSection = computed(() =>
    this.sections().find((item) => item.type === this.selectedTypeName()),
  );

  selectedCount = computed(
    () => this.activeSection()?.items.filter((item) => item.selected).length || 0,
  );

  totalValue = computed(
    () =>
      this.activeSection()
        ?.items.filter((item) => item.selected)
        .reduce((acc, item) => acc + item.value, 0) || 0,
  );

  toggleItem(itemId: number) {
    this.sections.update((prevSections) =>
      prevSections.map((section) => ({
        ...section,
        items: section.items.map((item) =>
          item.id === itemId ? { ...item, selected: !item.selected } : item,
        ),
      })),
    );
  }

  selectType(typeName: string) {
    this.selectedTypeName.set(typeName);
  }
}
