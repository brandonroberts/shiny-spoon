import { TestBed } from '@angular/core/testing';

import { AddSchematicService } from './add-schematic.service';

describe('AddSchematicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddSchematicService = TestBed.get(AddSchematicService);
    expect(service).toBeTruthy();
  });
});
