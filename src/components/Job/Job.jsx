import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { FaMoneyBillAlt } from "react-icons/fa";
const Job = ({job}) => {
    const {logo, job_title, company_name, location, salary, remote_or_onsite, job_type} = job;
    return (
        <div>
            <div className="card card-compact h-[360px] bg-base-100 shadow-xl mb-2">
  <figure className="card-title px-10 pt-10">
    <img width='120px' height='100px' src={logo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="flex gap-2 w-1/2 text-center">
    <p className="border border-blue-600 p-2 rounded-lg">{remote_or_onsite}</p>
    <p className="border border-blue-600 p-2 rounded-lg">{job_type}</p>
    </div>
    <div className="flex gap-3 w-1/2">
    <p className="flex items-center gap-2"><CiLocationOn className="text-xl"></CiLocationOn>{location}</p>
    <p className="flex items-center gap-2"><FaMoneyBillAlt className="text-xl"></FaMoneyBillAlt>{salary}</p>
    </div>
   
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired
}

export default Job;