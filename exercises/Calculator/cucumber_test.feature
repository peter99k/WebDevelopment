#Author: your.email@your.domain.com
#Keywords Summary : This file tests the calculator written in Java
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Functionality of the calculator
  I want to use this file as my feature file

  @tag1
  Scenario: Addition function of the calculator
    Given the calculator is on
    When I add 2 and 2 
    Then the result is 4
    
  Scenario : Subtraction function of the calculator
    Given the calculator is on
    When I subtract 3 from 10
    Then the result is 7
    
  Scenario : Multiplication function of the calculator
    Given the calculator is on
    When I multiply 3 and 3
    Then the result is 9
    
  Scenario : Division function of the calculator
    Given the calculator is on
    When I divide 30 by 10
    Then the result is 3
    
  @tag2
  Scenario Outline:

    Examples: 
      | name  | value | status  |
      | num1 |     5 | success |
      | num2 |     7 | Fail    |
