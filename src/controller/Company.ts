import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { findAllCompanies, findById, findByIdAndUpdate, loginCompany, passwordMatch, saveCompany } from "../services/Company";
import jwt from "jsonwebtoken"

const getCompanyById = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    findById(id).then((company) => {
      if (company) {
        res.status(200).json(company);
      } else {
        res.status(404).json({ message: "Company not found" });
      }
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_COMPANY");
  }
};

const getCompanies = (req: Request, res: Response) => {
  try {
    findAllCompanies().then((companies) => {
      res.status(200).json(companies);
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_COMPANIES");
  }
};

const updateCompany = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;

    if (!id) {
      return handleHttp(res, "ERROR_UPDATE_COMPANY");
    }

    findByIdAndUpdate(id, body).then((company) => {
      res.status(200).json(company);
    });
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_COMPANY");
  }
};

const postLoginCompany = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const company: any = await loginCompany(email);
    if (!company) {
      res.status(404).json({ message: "User not found" });
    } else {
      const isMatch = await passwordMatch(email, password);
      if (isMatch) {
        // Token Generado
        const token = jwt.sign({ id: company.id, email: company.email }, process.env.JWT_SECRET || 'clave_privada_de_repuesto', {//esto da error, pero no sé bien por qué.
          expiresIn: '1h' //Expiración
        });

        res.status(200).json({ token });//devolución del token
      } else {
        res.status(400).json({ message: "Invalid data" });
      }
    }   
  } catch (e) {
    handleHttp(res, "ERROR_LOGIN_USER");
  }
};

const postCompany = (req: Request, res: Response) => {
  try {
    const company = req.body;
    console.log(company);
    saveCompany(company).then((company) => {
      res.status(201).json(company);
    });
  } catch (e) {
    handleHttp(res, "ERROR_POST_COMPANY");
  }
};

const deleteCompany = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_COMPANY");
  }
};

export { getCompanyById, getCompanies, updateCompany, postLoginCompany, deleteCompany, postCompany };
