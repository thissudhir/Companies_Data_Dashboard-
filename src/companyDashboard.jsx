import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CompanyDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (userData) {
      setIsLoggedIn(true);
    }
    fetch("https://dummy-json.mock.beeceptor.com/companies")
      .then((response) => response.json())

      .then((data) => {
        setCompanies(data);
        setIsLoading(true);
      })
      .catch((error) => console.error("Error fetching companies:", error));
  }, []);
  console.log("data", companies);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {!isLoading ? (
        <Typography
          variant="h4"
          fontFamily="Bricolage Grotesque"
          textAlign="center"
          mb={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {" "}
          Loading...
        </Typography>
      ) : (
        <Box>
          <Typography
            variant="h4"
            fontFamily="Bricolage Grotesque"
            textAlign="center"
            mb={3}
          >
            Company Data Dashboard
          </Typography>

          {!isLoggedIn ? (
            <Table
              sx={{
                minWidth: 650,
                bgcolor: "#f9f9f9",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: "#00CE84",
                  }}
                >
                  <TableCell
                    sx={{
                      color: "#ffffff",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#ffffff",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Country
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#ffffff",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Industry
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {companies.map((company) => (
                  <TableRow
                    key={company.id}
                    sx={{
                      "&:nth-of-type(odd)": {
                        backgroundColor: "#f2f2f2",
                      },
                      "&:hover": {
                        backgroundColor: "#e0f7fa",
                      },
                    }}
                  >
                    <TableCell>{company.name}</TableCell>
                    <TableCell>{company.country}</TableCell>
                    <TableCell>{company.industry}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Box>
              {companies.map((company) => (
                <Card
                  key={company.id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 3,
                    margin: 2,
                    bgcolor: "#f5f5f5",
                    boxShadow: 3,
                    borderRadius: 2,
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h4"
                      fontFamily="Bricolage Grotesque"
                      mb={2}
                      sx={{ color: "#333", fontWeight: "bold" }}
                    >
                      {company.name}
                    </Typography>
                    <Typography
                      fontFamily="Bricolage Grotesque"
                      sx={{ color: "#555", marginBottom: 1 }}
                    >
                      Country: {company.country}
                    </Typography>
                    <Typography
                      fontFamily="Bricolage Grotesque"
                      sx={{ color: "#555", marginBottom: 1 }}
                    >
                      Industry: {company.industry}
                    </Typography>
                    <Typography
                      fontFamily="Bricolage Grotesque"
                      sx={{ color: "#555", marginBottom: 1 }}
                    >
                      Address: {company.address}
                    </Typography>
                    <Typography
                      fontFamily="Bricolage Grotesque"
                      sx={{ color: "#555", marginBottom: 1 }}
                    >
                      Zip: {company.zip}
                    </Typography>
                    <Typography
                      fontFamily="Bricolage Grotesque"
                      sx={{ color: "#555", marginBottom: 1 }}
                    >
                      Domain: {company.domain}
                    </Typography>
                    <Typography
                      fontFamily="Bricolage Grotesque"
                      sx={{ color: "#555", marginBottom: 1 }}
                    >
                      Employee Count: {company.employeeCount}
                    </Typography>
                    <Typography
                      fontFamily="Bricolage Grotesque"
                      sx={{ color: "#555", marginBottom: 1 }}
                    >
                      CEO: {company.ceoName}
                    </Typography>
                    <Typography
                      fontFamily="Bricolage Grotesque"
                      sx={{ color: "#00CE84", fontWeight: "medium" }} // Green color for market cap
                    >
                      Market Cap: ${company.marketCap.toLocaleString()}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
          {!isLoggedIn ? (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Link to={"/signup"}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#00CE84",
                    "&:hover": { bgcolor: "#00A36A" },
                    paddingX: 4,
                    paddingY: 1.5,
                    borderRadius: "8px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    fontFamily: "Bricolage Grotesque",
                    textTransform: "none",
                  }}
                >
                  Sign Up to See Full Details
                </Button>
              </Link>
            </Box>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Link to={"/login"}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#00CE84",
                    "&:hover": { bgcolor: "#00A36A" },
                    paddingX: 4,
                    paddingY: 1.5,
                    borderRadius: "8px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    fontFamily: "Bricolage Grotesque",
                    textTransform: "none",
                  }}
                >
                  Logout
                </Button>
              </Link>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default CompanyDashboard;
