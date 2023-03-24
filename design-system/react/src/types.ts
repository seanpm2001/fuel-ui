/// <reference types="@fuel-stitches/react" />

import type { BadgeDef } from './components';
import type {
  AccordionContentDef,
  AccordionDef,
  AccordionItemDef,
  AccordionTriggerDef,
} from './components/Accordion/types';
import type {
  AlertActionsDef,
  AlertButtonDef,
  AlertDef,
  AlertDescriptionDef,
  AlertTitleDef,
} from './components/Alert/types';
import type { AspectRatioDef } from './components/AspectRatio/types';
import type { BoxDef } from './components/Box/types';
import type { ButtonDef } from './components/Button/types';
import type { FlexDef } from './components/Flex/types';
import type { HeadingDef } from './components/Heading/types';
import type { ImageDef } from './components/Image/types';
import type { LinkDef } from './components/Link/types';
import type { SpinnerDef } from './components/Spinner/types';
import type { StackDef } from './components/Stack/types';
import type { TextDef } from './components/Text/types';

export enum Components {
  Accordion = 'Accordion',
  AccordionContent = 'AccordionContent',
  AccordionItem = 'AccordionItem',
  AccordionTrigger = 'AccordionTrigger',
  Alert = 'Alert',
  AlertTitle = 'AlertTitle',
  AlertActions = 'AlertActions',
  AlertButton = 'AlertButton',
  AlertDescription = 'AlertDescription',
  AlertDialog = 'AlertDialog',
  AlertDialogAction = 'AlertDialogAction',
  AlertDialogCancel = 'AlertDialogCancel',
  AlertDialogContent = 'AlertDialogContent',
  AlertDialogDescription = 'AlertDialogDescription',
  AlertDialogFooter = 'AlertDialogFooter',
  AlertDialogHeading = 'AlertDialogHeading',
  AlertDialogTrigger = 'AlertDialogTrigger',
  AspectRatio = 'AspectRatio',
  Avatar = 'Avatar',
  AvatarGenerated = 'AvatarGenerated',
  Badge = 'Badge',
  Box = 'Box',
  BoxCentered = 'BoxCentered',
  Button = 'Button',
  ButtonGroup = 'ButtonGroup',
  ButtonLink = 'ButtonLink',
  Card = 'Card',
  CardBody = 'CardBody',
  CardFooter = 'CardFooter',
  CardHeader = 'CardHeader',
  CardList = 'CardList',
  CardListItem = 'CardListItem',
  Checkbox = 'Checkbox',
  Container = 'Container',
  ContentLoader = 'ContentLoader',
  Copyable = 'Copyable',
  Dialog = 'Dialog',
  DialogClose = 'DialogClose',
  DialogContent = 'DialogContent',
  DialogDescription = 'DialogDescription',
  DialogFooter = 'DialogFooter',
  DialogHeading = 'DialogHeading',
  DialogTrigger = 'DialogTrigger',
  Drawer = 'Drawer',
  DrawerBody = 'DrawerBody',
  DrawerClose = 'DrawerClose',
  DrawerContent = 'DrawerContent',
  DrawerTrigger = 'DrawerTrigger',
  Dropdown = 'Dropdown',
  DropdownMenu = 'DropdownMenu',
  DropdownMenuItem = 'DropdownMenuItem',
  DropdownTrigger = 'DropdownTrigger',
  Flex = 'Flex',
  FocusArrowNavigator = 'FocusArrowNavigator',
  FocusScope = 'FocusScope',
  Form = 'Form',
  FormControl = 'FormControl',
  FormErrorMessage = 'FormErrorMessage',
  FormHelperText = 'FormHelperText',
  FormLabel = 'FormLabel',
  FuelLogo = 'FuelLogo',
  Grid = 'Grid',
  GridItem = 'GridItem',
  Heading = 'Heading',
  HelperIcon = 'HelperIcon',
  Icon = 'Icon',
  IconButton = 'IconButton',
  Image = 'Image',
  Input = 'Input',
  InputAddon = 'InputAddon',
  InputAddonLeft = 'InputAddonLeft',
  InputAddonRight = 'InputAddonRight',
  InputElement = 'InputElement',
  InputElementLeft = 'InputElementLeft',
  InputElementRight = 'InputElementRight',
  InputField = 'InputField',
  InputAmount = 'InputAmount',
  InputPassword = 'InputPassword',
  Link = 'Link',
  List = 'List',
  ListItem = 'ListItem',
  Menu = 'Menu',
  MenuItem = 'MenuItem',
  Pagination = 'Pagination',
  PaginationItem = 'PaginationItem',
  PaginationItems = 'PaginationItems',
  PaginationPrev = 'PaginationPrev',
  PaginationNext = 'PaginationNext',
  PaginationNav = 'PaginationNav',
  PasswordStrength = 'PasswordStrength',
  Popover = 'Popover',
  RadioGroup = 'RadioGroup',
  RadioGroupItem = 'RadioGroupItem',
  Spinner = 'Spinner',
  Stack = 'Stack',
  Switch = 'Switch',
  Tabs = 'Tabs',
  TabsContent = 'TabsContent',
  TabsList = 'TabsList',
  TabsTrigger = 'TabsTrigger',
  Tag = 'Tag',
  TagCloseButton = 'TagCloseButton',
  Text = 'Text',
  Toast = 'Toast',
  Tooltip = 'Tooltip',
}

export type StoreDefs = {
  Accordion: AccordionDef;
  AccordionContent: AccordionContentDef;
  AccordionItem: AccordionItemDef;
  AccordionTrigger: AccordionTriggerDef;
  Alert: AlertDef;
  AlertActions: AlertActionsDef;
  AlertButton: AlertButtonDef;
  AlertDescription: AlertDescriptionDef;
  AlertTitle: AlertTitleDef;
  AspectRatio: AspectRatioDef;
  Badge: BadgeDef;
  Box: BoxDef;
  Button: ButtonDef;
  Image: ImageDef;
  Flex: FlexDef;
  Heading: HeadingDef;
  Text: TextDef;
  Link: LinkDef;
  Spinner: SpinnerDef;
  Stack: StackDef;
};
