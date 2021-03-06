import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { ICECategory } from '../models/category';

import { ComplianceStatus } from '../models/cedata';
import { IUpdateExperience } from '../models/experience';

const getCEData = () =>
  of(new HttpResponse({
    status: 200,
    body: {
      status: 200,
      body: {
        title: 'Progress for CE Year 2023',
        unitLongName: 'Hours',
        unitShortName: 'Hrs.',
        categoryGroups: [
          {
            categories: [
              {
                displayName: 'Total',
                goal: 30,
                amountCompleted: 10,
                percentCompleted: 33,
              },
            ],
          },
          {
            categories: [
              {
                displayName: 'Professionalism',
                goal: 6,
                amountCompleted: 4,
                percentCompleted: 66,
              },
              {
                displayName: 'Bias',
                goal: 1,
                amountCompleted: 1,
                percentCompleted: 100,
              },
              {
                displayName: 'General Business',
                goal: 3,
                amountCompleted: 2,
                percentCompleted: 66,
              },
            ],
          },
          {
            categories: [
              {
                displayName: 'Specific CE',
                goal: 15,
                amountCompleted: 3,
                percentCompleted: 20,
              },
              {
                displayName: 'Specific Organized CE',
                goal: 6,
                amountCompleted: 1,
                percentCompleted: 17,
              },
            ],
          },
        ],
        complianceStatus: ComplianceStatus.compliant,
      }
    }
  })
);

const getExperienceData = () =>
 of(new HttpResponse({
    status: 200,
    body: [{
      ceExperienceId: 1,
      userId: 1,
      location: {
        ceLocationId: 1,
        name: 'Home'
      },
      carryForward: false,
      programTitle: 'Exam Study',
      startDate: '2022-03-01',
      endDate: '2022-03-01',
      categories: [{
        ceCategoryId: 5,
        parentCategoryId: 0,
        nationalStandardId: 2,
        categoryListId: 7,
        name: 'Other Relevant',
        displayName: 'Other Relevant'
      }],
      amounts: [{
        ceExperienceAmountId: 1,
        ceExperienceId: 1,
        ceUnitId: 2,
        amount: 75
      },{
        ceExperienceAmountId: 2,
        ceExperienceId: 1,
        ceUnitId: 1,
        amount: 1.5
      }]
    },
    {
      ceExperienceId: 2,
      userId: 1,
      location: {
        ceLocationId: 3,
        name: 'Other'
      },
      carryForward: false,
      programTitle: 'Professionalism Seminar',
      eventName: 'Actuary Conference',
      startDate: '2022-02-12',
      endDate: '2022-02-12',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu',
      categories: [{
        ceCategoryId: 2,
        parentCategoryId: 0,
        nationalStandardId: 2,
        categoryListId: 7,
        name: 'Professionalism',
        displayName: 'Professionalism'
      }, {
        ceCategoryId: 6,
        parentCategoryId: 0,
        nationalStandardId: 2,
        categoryListId: 9,
        name: 'Organized',
        displayName: 'Organized'
      }],
      amounts: [{
        ceExperienceAmountId: 3,
        ceExperienceId: 2,
        ceUnitId: 2,
        amount: 50
      },{
        ceExperienceAmountId: 4,
        ceExperienceId: 2,
        ceUnitId: 1,
        amount: 1
      }]
    },
      {
        ceExperienceId: 3,
        userId: 1,
        location: {
          ceLocationId: 2,
          name: 'Work'
        },
        carryForward: false,
        programTitle: 'General Business Round Table',
        startDate: '2022-01-11',
        endDate: '2022-01-11',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu',
        notes: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu',
        categories: [{
          ceCategoryId: 4,
          parentCategoryId: 0,
          nationalStandardId: 2,
          categoryListId: 7,
          name: 'General Business',
          displayName: 'General Business'
        }, {
          ceCategoryId: 3,
          parentCategoryId: 0,
          nationalStandardId: 2,
          categoryListId: 8,
          name: 'Bias',
          displayName: 'Bias'
        }, {
          ceCategoryId: 6,
          parentCategoryId: 0,
          nationalStandardId: 2,
          categoryListId: 9,
          name: 'Organized',
          displayName: 'Organized'
        },{
          ceCategoryId: 12,
          parentCategoryId: 0,
          nationalStandardId: 3,
          categoryListId: 10,
          name: 'Specific',
          displayName: 'Specific'
        }],
        amounts: [{
          ceExperienceAmountId: 5,
          ceExperienceId: 3,
          ceUnitId: 2,
          amount: 25
        },{
          ceExperienceAmountId: 6,
          ceExperienceId: 3,
          ceUnitId: 1,
          amount: 0.5
        }]
      }]
    })
  );

const getUnitInfo = () =>
  of(new HttpResponse({
      status: 200,
      body: [{
        ceUnitId: 1,
        parentUnitId: 2,
        unitSingular: 'Hr.',
        unitPlural: 'Hrs.',
        isDisabled: true,
        conversionFormula: '/50'
      },
      {
        ceUnitId: 2,
        parentUnitId: 0,
        unitSingular: 'Min.',
        unitPlural: 'Min.',
        isDisabled: false,
        conversionFormula: ''
      }]
    })
  );

const getCategoryLists = () =>
  of(new HttpResponse({
      status: 200,
      body: [{
        ceCategoryListId: 7,
        name: 'generalCategories',
        displayQuestion: 'Please indicate the CE Type',
        displayOrder: 1,
        categories: [{
          ceCategoryId: 2,
          parentCategoryId: 0,
          nationalStandardId: 2,
          categoryListId: 7,
          name: 'Professionalism',
          displayName: 'Professionalism'
        },{
          ceCategoryId: 4,
          parentCategoryId: 0,
          nationalStandardId: 2,
          categoryListId: 7,
          name: 'General Business',
          displayName: 'General Business'
        },{
          ceCategoryId: 5,
          parentCategoryId: 0,
          nationalStandardId: 2,
          categoryListId: 7,
          name: 'Other Relevant',
          displayName: 'Other Relevant'
        }]
      },{
        ceCategoryListId: 8,
        name: 'bias',
        displayQuestion: 'Does this CE include a Bias topic?',
        displayOrder: 2,
        categories: [{
          ceCategoryId: 3,
          parentCategoryId: 0,
          nationalStandardId: 2,
          categoryListId: 8,
          name: 'Bias',
          displayName: 'Bias'
        }]
      },{
        ceCategoryListId: 9,
        name: 'organized',
        displayQuestion: 'Is this CE organized?',
        displayOrder: 3,
        categories: [{
          ceCategoryId: 6,
          parentCategoryId: 0,
          nationalStandardId: 2,
          categoryListId: 9,
          name: 'Organized',
          displayName: 'Organized'
        }]
      },{
        ceCategoryListId: 10,
        name: 'specific',
        displayQuestion: 'Does this meet USQS Specific Education Requirements under Section 3.3?',
        displayOrder: 4,
        categories: [{
          ceCategoryId: 12,
          parentCategoryId: 0,
          nationalStandardId: 2,
          categoryListId: 10,
          name: 'Specific',
          displayName: 'Specific'
        }]
      }]
    })
  );

const getLocations = () =>
  of(new HttpResponse({
      status: 200,
      body: [{
        ceLocationId: 1,
        name: 'Home'
      },{
        ceLocationId: 2,
        name: 'Work'
      },{
        ceLocationId: 3,
        name: 'Online'
      },{
        ceLocationId: 4,
        name: 'Other'
      }]
    })
  );

const addExperience = (body) => {
  const id = Math.round(Math.random()*10);
  const exp = JSON.parse(body);
  const newExp = {
    ceExperienceId: id,
    userId: 1,
    location: {
      ceLocationId: exp.ceLocationId,
      name: 'New Location'
    },
    carryForward: exp.carryForward,
    programTitle: exp.programTitle,
    eventName: exp.eventName,
    startDate: exp.ceDate,
    endDate: exp.ceDate,
    description: exp.description,
    notes: exp.notes,
    categories: exp.categories.map(cat => ({
        ceCategoryId: cat,
        parentCategoryId: 0,
        nationalStandardId: 2,
        categoryListId: 7,
        name: 'Test',
        displayName: 'Test'
      } as ICECategory
    )),
    amounts: [{
      ceExperienceAmountId: id + 1,
      ceExperienceId: id,
      ceUnitId: 1,
      amount: exp.timeSpentParent
    },
    {
      ceExperienceAmountId: id + 2,
      ceExperienceId: id,
      ceUnitId: 2,
      amount: exp.timeSpentChild
    }]
  };
  return of(new HttpResponse({
    status: 200,
    body: newExp
  }));
};

export const mockEndpoints = {
  GET: {
    'https://192.168.31.186:44309/api/ce/ceData': {
      handler: getCEData
    },
    'https://192.168.31.186:44309/api/ce/experiences': {
      handler: getExperienceData
    },
    'https://192.168.31.186:44309/api/ce/units': {
      handler: getUnitInfo
    },
    'https://192.168.31.186:44309/api/ce/categoryLists': {
      handler: getCategoryLists
    },
    'https://192.168.31.186:44309/api/ce/locations': {
      handler: getLocations
    }
  },
  POST: {
    'https://192.168.31.186:44309/api/ce/addExperience': {
      handler: addExperience
    }
  }
};
