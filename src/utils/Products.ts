interface FeatureObject {
  featureName: string
}
interface ProductObject {
  id: number,
  name: string,
  poster:String,
  features: Array<FeatureObject>
}

const products: Array<ProductObject> = [
  {
    id: 1,
    poster:"https://res.cloudinary.com/precieux/image/upload/v1672046865/4204887_oznrnq.jpg",
    name: "Pharmacy",
    features: [
      {
        featureName: "Inventory & Stock Management"
      },
      {
        featureName: "Sales & Billing(RRA Invoice)"
      }, {
        featureName: "Expense Management"
      }, {
        featureName: "Barcode Selling"
      }, {
        featureName: "Auto purchase import"
      }, {
        featureName: "Purchase ordering"
      }, {
        featureName: "Employee Management"
      }, {
        featureName: "Client Management"
      }, {
        featureName: "Suppliers Management"
      }, {
        featureName: "Branch Management"
      }, {
        featureName: "Serve Insurances"
      }, {
        featureName: "Easily Prints Global Invoices"
      }, {
        featureName: "Double Invoicing On Insured Client"
      }, {
        featureName: "Easy Send Mails To The partners"
      }, {
        featureName: "Send Report To Manager"
      }, {
        featureName: "Business Reporting"
      }, {
        featureName: "Export Reports"
      }, {
        featureName: "Keeps Business Data"
      }
    ]
  },
  {
    id: 2,
    poster:"https://res.cloudinary.com/precieux/image/upload/v1672046865/4204887_oznrnq.jpg",
    name: "Shop",
    features: [
      {
        featureName: "Inventory & Stock Management"
      },
      {
        featureName: "Sales & Billing(RRA Invoice)"
      }, {
        featureName: "Expense Management"
      }, {
        featureName: "Barcode Selling"
      }, {
        featureName: "Auto purchase import"
      }, {
        featureName: "Purchase ordering"
      }, {
        featureName: "Employee Management"
      }, {
        featureName: "Client Management"
      }, {
        featureName: "Suppliers Management"
      }, {
        featureName: "Branch Management"
      }, {
        featureName: "Serve Insurances"
      }, {
        featureName: "Easily Prints Global Invoices"
      }, {
        featureName: "Double Invoicing On Insured Client"
      }, {
        featureName: "Easy Send Mails To The partners"
      }, {
        featureName: "Send Report To Manager"
      }, {
        featureName: "Business Reporting"
      }, {
        featureName: "Export Reports"
      }, {
        featureName: "Keeps Business Data"
      }
    ]
  },
  {
    id: 3,
    poster:"https://res.cloudinary.com/precieux/image/upload/v1672046865/4204887_oznrnq.jpg",
    name: "Supermarket",
    features: [
      {
        featureName: "Inventory & Stock Management"
      },
      {
        featureName: "Sales & Billing(RRA Invoice)"
      }, {
        featureName: "Expense Management"
      }, {
        featureName: "Barcode Selling"
      }, {
        featureName: "Auto purchase import"
      }, {
        featureName: "Purchase ordering"
      }, {
        featureName: "Employee Management"
      }, {
        featureName: "Client Management"
      }, {
        featureName: "Suppliers Management"
      }, {
        featureName: "Branch Management"
      }, {
        featureName: "Serve Insurances"
      }, {
        featureName: "Easily Prints Global Invoices"
      }, {
        featureName: "Double Invoicing On Insured Client"
      }, {
        featureName: "Easy Send Mails To The partners"
      }, {
        featureName: "Send Report To Manager"
      }, {
        featureName: "Business Reporting"
      }, {
        featureName: "Export Reports"
      }, {
        featureName: "Keeps Business Data"
      }
    ]
  },
  {
    id: 4,
    poster:"https://res.cloudinary.com/precieux/image/upload/v1672046865/4204887_oznrnq.jpg",

    name: "Production",
    features: [
      {
        featureName: "Inventory & Stock Management"
      },
      {
        featureName: "Sales & Billing(RRA Invoice)"
      }, {
        featureName: "Expense Management"
      }, {
        featureName: "Barcode Selling"
      }, {
        featureName: "Auto purchase import"
      }, {
        featureName: "Purchase ordering"
      }, {
        featureName: "Employee Management"
      }, {
        featureName: "Client Management"
      }, {
        featureName: "Suppliers Management"
      }, {
        featureName: "Branch Management"
      }, {
        featureName: "Serve Insurances"
      }, {
        featureName: "Easily Prints Global Invoices"
      }, {
        featureName: "Double Invoicing On Insured Client"
      }, {
        featureName: "Easy Send Mails To The partners"
      }, {
        featureName: "Send Report To Manager"
      }, {
        featureName: "Business Reporting"
      }, {
        featureName: "Export Reports"
      }, {
        featureName: "Keeps Business Data"
      }
    ]
  }
  ,
  {
    id: 5,
    poster:"https://res.cloudinary.com/precieux/image/upload/v1672046865/4204887_oznrnq.jpg",
    name: "Gistics",
    features: [
      {
        featureName: "Inventory & Stock Management"
      },
      {
        featureName: "Sales & Billing(RRA Invoice)"
      }, {
        featureName: "Expense Management"
      }, {
        featureName: "Barcode Selling"
      }, {
        featureName: "Auto purchase import"
      }, {
        featureName: "Purchase ordering"
      }, {
        featureName: "Employee Management"
      }, {
        featureName: "Client Management"
      }, {
        featureName: "Suppliers Management"
      }, {
        featureName: "Branch Management"
      }, {
        featureName: "Serve Insurances"
      }, {
        featureName: "Easily Prints Global Invoices"
      }, {
        featureName: "Double Invoicing On Insured Client"
      }, {
        featureName: "Easy Send Mails To The partners"
      }, {
        featureName: "Send Report To Manager"
      }, {
        featureName: "Business Reporting"
      }, {
        featureName: "Export Reports"
      }, {
        featureName: "Keeps Business Data"
      }
    ]
  },
  {
    id: 6,
    poster:"https://res.cloudinary.com/precieux/image/upload/v1672046865/4204887_oznrnq.jpg",
    name: "Network",
    features: [
      {
        featureName: "Inventory & Stock Management"
      },
      {
        featureName: "Sales & Billing(RRA Invoice)"
      }, {
        featureName: "Expense Management"
      }, {
        featureName: "Barcode Selling"
      }, {
        featureName: "Auto purchase import"
      }, {
        featureName: "Purchase ordering"
      }, {
        featureName: "Employee Management"
      }, {
        featureName: "Client Management"
      }, {
        featureName: "Suppliers Management"
      }, {
        featureName: "Branch Management"
      }, {
        featureName: "Serve Insurances"
      }, {
        featureName: "Easily Prints Global Invoices"
      }, {
        featureName: "Double Invoicing On Insured Client"
      }, {
        featureName: "Easy Send Mails To The partners"
      }, {
        featureName: "Send Report To Manager"
      }, {
        featureName: "Business Reporting"
      }, {
        featureName: "Export Reports"
      }, {
        featureName: "Keeps Business Data"
      }
    ]
  }
]

export default products
